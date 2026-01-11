import { WxAuthConfig } from "./miniprogram/WxAuth";
import { JsapiPayConfig } from "./pay/JsapiPay";
export type { WxAuthConfig, JsapiPayConfig };

/**
 * 微信小程序配置
 * @param appId 微信小程序appId
 * @param appSecret 微信小程序appSecret
 */
export const wxAuthConfig: WxAuthConfig = {
  appId: process.env.WX_APP_ID || "",
  appSecret: process.env.WX_APP_SECRET || "",
};

/**
 * 微信支付配置
 * @param mchid 微信支付商户号
 * @param appid 微信支付appid
 * @param serial 微信支付证书序列号
 * @param privateKey 微信支付证书私钥
 * @param apiv3Key 微信支付apiv3密钥
 * @param notify_url 微信支付回调地址
 */
export const jsapiPayConfig: JsapiPayConfig = {
  mchid: process.env.WX_PAY_MCHID || "",
  appid: process.env.WX_PAY_APPID || "",
  serial: process.env.WX_PAY_SERIAL || "",
  privateKey: process.env.WX_PAY_PRIVATE_KEY || "",
  apiv3Key: process.env.WX_PAY_APIV3_KEY || "",
  notify_url: process.env.WX_PAY_NOTIFY_URL || "",
};


