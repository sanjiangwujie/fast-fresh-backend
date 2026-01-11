import * as $OpenApi from "@alicloud/openapi-client";
import Dysmsapi20170525, {
  SendSmsRequest,
  SendSmsResponse,
} from "@alicloud/dysmsapi20170525";
import { aliSmsConfig } from "./config";
/**
 * 阿里云短信服务配置
 * @property accessKeyId 阿里云AccessKeyId
 * @property accessKeySecret 阿里云AccessKeySecret
 * @property endpoint 可选，API服务域名，默认"dysmsapi.aliyuncs.com"
 */
export interface AliSmsConfig {
  accessKeyId: string;
  accessKeySecret: string;
  endpoint?: string; // 默认为 "dysmsapi.aliyuncs.com"
}

/**
 * 发送短信参数
 * @property signName 短信签名
 * @property templateCode 短信模板CODE
 * @property templateParam 模板参数对象（如 { code: '123456' }）
 * @property phoneNumber 接收短信的手机号（单个/逗号分隔多个）
 */
export interface SendSmsParams {
  signName: string;
  templateCode: string;
  templateParam: Record<string, string>;
  phoneNumber: string;
}

/**
 * 批量发送不同内容短信参数
 */
export interface BatchSendSmsItem {
  phoneNumber: string;
  signName: string;
  templateCode: string;
  templateParam: Record<string, string>;
}

/**
 * 批量发送结果
 */
export interface BatchSendSmsResult {
  phoneNumber: string;
  result: SendSmsResponse | null;
  error?: any;
}

/**
 * AliSms 短信发送类，基于阿里云官方SDK封装
 * 支持实例化配置，发送短信，类型安全
 * 用法：
 * const sms = new AliSms({ accessKeyId, accessKeySecret });
 * await sms.sendSms({ signName, templateCode, templateParam, phoneNumber });
 */
export class AliSms {
  private client: Dysmsapi20170525;

  /**
   * 实例化短信发送类
   * @param config 阿里云短信配置
   */
  constructor(config: AliSmsConfig = aliSmsConfig) {
    const openApiConfig = new $OpenApi.Config({
      accessKeyId: config.accessKeyId,
      accessKeySecret: config.accessKeySecret,
    });
    openApiConfig.endpoint = config.endpoint || "dysmsapi.aliyuncs.com";
    this.client = new Dysmsapi20170525(openApiConfig);
  }

  /**
   * 发送短信
   * @param params 发送短信参数
   * @returns 阿里云官方SendSmsResponse对象
   */
  async sendSms(params: SendSmsParams): Promise<SendSmsResponse> {
    const req = new SendSmsRequest({
      phoneNumbers: params.phoneNumber,
      signName: params.signName,
      templateCode: params.templateCode,
      templateParam: JSON.stringify(params.templateParam),
    });
    return await this.client.sendSms(req);
  }

  /**
   * 批量发送不同内容短信（每个手机号可自定义内容）
   * @param items 每个手机号及其内容
   * @returns 每个手机号的发送结果和错误
   */
  async batchSendSms(items: BatchSendSmsItem[]): Promise<BatchSendSmsResult[]> {
    const results: BatchSendSmsResult[] = [];
    for (const item of items) {
      try {
        const result = await this.sendSms({
          phoneNumber: item.phoneNumber,
          signName: item.signName,
          templateCode: item.templateCode,
          templateParam: item.templateParam,
        });
        results.push({ phoneNumber: item.phoneNumber, result });
      } catch (error) {
        results.push({ phoneNumber: item.phoneNumber, result: null, error });
      }
    }
    return results;
  }
}
