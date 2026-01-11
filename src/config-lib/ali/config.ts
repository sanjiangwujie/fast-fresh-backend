import { AliSmsConfig } from "./AliSms";
export type { AliSmsConfig };

/**
 * 阿里云短信配置
 * @param accessKeyId 阿里云短信accessKeyId
 * @param accessKeySecret 阿里云短信accessKeySecret
 * @param endpoint 阿里云短信endpoint
 */
export const aliSmsConfig: AliSmsConfig = {
  accessKeyId: process.env.ALI_SMS_ACCESS_KEY_ID || "",
  accessKeySecret: process.env.ALI_SMS_ACCESS_KEY_SECRET || ""
};
