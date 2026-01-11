import { QiniuConfig } from "./QiniuUploader";
export type { QiniuConfig };

/**
 * 七牛云配置
 * @param accessKey 七牛云accessKey
 * @param secretKey 七牛云secretKey
 * @param bucket 七牛云bucket
 * @param zone 七牛云zone，默认auto，自动选择zone
 * @param baseUrl 七牛云baseUrl，拼接url用，默认空
 * @param dirPath 七牛云dirPath，自动生成key用，默认空
 */
export const qiniuConfig: QiniuConfig = {
  accessKey: process.env.QINIU_ACCESS_KEY || "",
  secretKey: process.env.QINIU_SECRET_KEY || "",
  bucket: process.env.QINIU_BUCKET || "",
  baseUrl: process.env.QINIU_BASE_URL || "",
  dirPath: process.env.QINIU_DIR_PATH || "",
};