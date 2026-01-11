import WechatPay from "wechatpay-node-v3";
import crypto from "crypto";
import { jsapiPayConfig } from "../config";

/**
 * 微信支付JSAPI（小程序/公众号）通用支付工具类
 * 支持下单、退款、回调验签/解密，适用于所有APIv3回调（支付、退款、分账等）
 *
 * 用法示例：
 * const pay = new JsapiPay({ ...配置... });
 * const result = await pay.pay({ ... });
 * const refundResult = await pay.refund({ ... });
 * const callbackData = await pay.verifyCallback(rawBody, headers);
 */
export interface JsapiPayConfig {
  mchid: string;
  appid: string;
  serial: string;
  privateKey: string | Buffer;
  apiv3Key: string;
  notify_url: string;
}

/**
 * 支付下单参数
 */
export interface PayParams {
  openid: string;
  out_trade_no: string;
  amount: number;
  description: string;
}

/**
 * 支付下单返回
 */
export interface PayResult {
  payParams: {
    timeStamp: string;
    nonceStr: string;
    package: string;
    signType: string;
    paySign: string;
    appId: string;
  };
  raw: any;
}

/**
 * 退款参数
 */
export interface RefundParams {
  out_trade_no: string;
  refund_no: string;
  refund_amount: number;
  total_amount: number;
  reason?: string;
}

/**
 * 退款返回
 */
export interface RefundResult {
  raw: any;
}

/**
 * 微信支付APIv3回调返回结构（通用，适用于支付、退款、分账等）
 * resource为已解密业务数据，字段随event_type不同而不同
 */
export interface WxPayCallbackResource {
  // 支付成功
  original_type?: string;
  appid?: string;
  mchid?: string;
  out_trade_no?: string;
  transaction_id?: string;
  trade_type?: string;
  trade_state?: string;
  trade_state_desc?: string;
  bank_type?: string;
  attach?: string;
  success_time?: string;
  payer?: { openid: string };
  amount?: {
    total: number;
    payer_total: number;
    currency: string;
    payer_currency: string;
  };
  // 退款成功
  out_refund_no?: string;
  refund_id?: string;
  refund_status?: string;
  refund_success_time?: string;
  refund_recv_accout?: string;
  refund_account?: string;
  refund_request_source?: string;
  refund_channel?: string;
  refund_fee?: number;
}

/**
 * 微信支付APIv3回调resource业务数据结构（常用字段，实际字段以微信文档为准）
 */
export interface WxPayCallbackResult {
  id: string;
  create_time: string;
  event_type: string; // 如 TRANSACTION.SUCCESS, REFUND.SUCCESS
  resource_type: string;
  summary: string;
  resource: WxPayCallbackResource;
}

export class JsapiPay {
  private client: any;
  private config: JsapiPayConfig;

  constructor(config: JsapiPayConfig = jsapiPayConfig) {
    this.config = config;
    this.client = new (WechatPay as any)({
      mchid: config.mchid,
      serial: config.serial,
      privateKey: Buffer.isBuffer(config.privateKey)
        ? config.privateKey
        : Buffer.from(config.privateKey),
      apiv3Key: config.apiv3Key,
    });
  }

  /**
   * 微信小程序/公众号支付下单，返回前端调起支付参数和微信原始返回，自动生成订单号（如未传）
   * @param params 支付参数，out_trade_no可选
   * @returns { payParams, raw, out_trade_no } payParams给前端，raw为微信原始返回，out_trade_no为本次订单号
   */
  async pay(
    params: Omit<PayParams, "out_trade_no"> & { out_trade_no?: string }
  ): Promise<PayResult & { out_trade_no: string }> {
    const out_trade_no = params.out_trade_no || JsapiPay.generateOrderNo();
    const result = await this.client.transactions_jsapi({
      appid: this.config.appid,
      mchid: this.config.mchid,
      description: params.description,
      out_trade_no,
      notify_url: this.config.notify_url,
      amount: { total: params.amount, currency: "CNY" },
      payer: { openid: params.openid },
    });
    const prepay_id = result?.prepay_id || result?.data?.prepay_id;
    return {
      payParams: this.buildPayParams(prepay_id),
      raw: result,
      out_trade_no,
    };
  }

  /**
   * 生成唯一订单号（静态方法）
   * 格式如 WX2024062612345678901234
   */
  static generateOrderNo(): string {
    return "WX" + Date.now() + Math.floor(Math.random() * 1000000);
  }

  /**
   * 微信退款
   * @param params 退款参数
   * @returns { raw } 微信原始退款返回
   */
  async refund(params: RefundParams): Promise<RefundResult> {
    const result = await this.client.refunds({
      out_trade_no: params.out_trade_no,
      out_refund_no: params.refund_no,
      reason: params.reason || "用户申请退款",
      amount: {
        refund: params.refund_amount,
        total: params.total_amount,
        currency: "CNY",
      },
      notify_url: this.config.notify_url,
    });
    return { raw: result };
  }

  /**
   * 微信支付/退款/分账等APIv3回调验签与解密（通用）
   * @param rawBody 微信回调原始body（string）
   * @param headers 微信回调请求头（Record<string, string>）
   * @returns WxPayCallbackResult 结构，resource为已解密业务数据
   * @example
   * const data = await pay.verifyCallback(rawBody, headers);
   * // data.event_type === 'TRANSACTION.SUCCESS' 支付成功
   * // data.event_type === 'REFUND.SUCCESS' 退款成功
   * // data.resource 业务数据
   */
  async verifyCallback(
    rawBody: string,
    headers: Record<string, string>
  ): Promise<WxPayCallbackResult> {
    return await this.client.callbackNotify(rawBody, headers);
  }

  /**
   * 生成前端调起支付参数（内部）
   */
  private buildPayParams(prepayId: string) {
    const appid = this.config.appid;
    const privateKey = this.config.privateKey;
    const timeStamp = Math.floor(Date.now() / 1000).toString();
    const nonceStr = Math.random().toString(36).substr(2, 15);
    const pkg = `prepay_id=${prepayId}`;
    const signType = "RSA";
    const signStr = `${appid}\n${timeStamp}\n${nonceStr}\n${pkg}\n`;
    const paySign = JsapiPay.signWithPrivateKey(signStr, privateKey);
    return {
      timeStamp,
      nonceStr,
      package: pkg,
      signType,
      paySign,
      appId: appid,
    };
  }

  /**
   * RSA-SHA256签名工具（内部）
   */
  private static signWithPrivateKey(
    str: string,
    privateKey: string | Buffer
  ): string {
    const sign = crypto.createSign("RSA-SHA256");
    sign.update(str);
    sign.end();
    return sign.sign(privateKey, "base64");
  }
}
