import * as qiniu from "qiniu";
import { qiniuConfig } from "./config";
/**
 * 七牛云上传配置
 * @param accessKey 七牛云accessKey
 * @param secretKey 七牛云secretKey
 * @param bucket 七牛云bucket
 * @param zone 七牛云zone, 默认auto，自动选择zone
 * @param baseUrl 七牛云baseUrl，拼接url用，默认空
 * @param dirPath 七牛云dirPath，自动生成key用，默认空
 */
export interface QiniuConfig {
  accessKey: string;
  secretKey: string;
  bucket: string;
  zone?: string; // 默认auto，自动选择zone
  baseUrl?: string; // 新增，拼接url用
  dirPath?: string; // 新增，自动生成key用
}

/**
 * 七牛云上传结果
 * @param path 七牛云path，文件路径
 * @param type 七牛云type，文件类型
 * @param url 七牛云url，拼接url用，默认空
 */
export interface QiniuUploadResult {
  path: string;
  type: string;
  url?: string;
}

export type QiniuUploadInput = File | Buffer | Blob;

export type QiniuBatchInput = QiniuUploadInput[];

/**
 * 生成七牛云key
 * @param filename 文件名
 * @param dirPath 七牛云dirPath，自动生成key用，默认空
 * @returns 七牛云key
 */
function generateKey(filename: string, dirPath: string = "") {
  const ext = filename.split(".").pop();
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${dirPath || ""}${timestamp}-${random}.${ext}`;
}

/**
 * 七牛云上传类
 * @param config 七牛云配置
 * @param config.accessKey 七牛云accessKey
 * @param config.secretKey 七牛云secretKey
 * @param config.bucket 七牛云bucket
 * @param config.zone 七牛云zone，默认auto，自动选择zone
 * @param config.baseUrl 七牛云baseUrl，拼接url用，默认空
 * @param config.dirPath 七牛云dirPath，自动生成key用，默认空
 * @example
 * const config = {
 *   accessKey: "your-access-key",
 *   secretKey: "your-secret-key",
 *   bucket: "your-bucket",
 *   baseUrl: "https://your-bucket.qiniucdn.com",
 *   dirPath: "your-base-path",
 * };
 * const uploader = new QiniuUploader(config);
 * const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
 * const result = await uploader.uploadFile(file);
 * console.log(result); // { path: "/your-base-path/1719852000-123456.txt", type: "text/plain", url: "https://your-bucket.qiniucdn.com/your-base-path/1719852000-123456.txt" }
 *
 */
export class QiniuUploader {
  private config: QiniuConfig;
  private mac: qiniu.auth.digest.Mac;
  private putPolicy: qiniu.rs.PutPolicyOptions;
  private uploadToken: string;
  private formUploader: qiniu.form_up.FormUploader;
  private bucketManager: qiniu.rs.BucketManager;

  constructor(config: QiniuConfig = qiniuConfig) {
    this.config = config;
    this.mac = new qiniu.auth.digest.Mac(config.accessKey, config.secretKey);
    this.putPolicy = {
      scope: config.bucket,
    };
    this.uploadToken = new qiniu.rs.PutPolicy(this.putPolicy).uploadToken(
      this.mac
    );
    const qnConfig = new qiniu.conf.Config();
    if (config.zone) {
      // 支持自定义zone
      // 例如: qiniu.zone.Zone_z0, qiniu.zone.Zone_z1, ...
      qnConfig.zone = qiniu.zone[config.zone as keyof typeof qiniu.zone];
    }
    this.formUploader = new qiniu.form_up.FormUploader(qnConfig);
    this.bucketManager = new qiniu.rs.BucketManager(this.mac, qnConfig);
  }

  /**
   * 上传单个文件，file支持File/Buffer/Blob，key可选，默认自动生成key
   * @param file 文件
   * @param key 七牛云key，默认自动生成key
   * @returns 七牛云上传结果
   * @example
   * const file = new File(["Hello, world!"], "hello.txt", { type: "text/plain" });
   * const result = await uploader.uploadFile(file);
   * console.log(result); // { path: "/your-base-path/1719852000-123456.txt", type: "text/plain", url: "https://your-bucket.qiniucdn.com/your-base-path/1719852000-123456.txt" }
   */
  async uploadFile(
    file: QiniuUploadInput,
    key?: string
  ): Promise<QiniuUploadResult> {
    const fileName = (file as File)?.name || "file";
    const uploadKey = key || generateKey(fileName, this.config.dirPath);
    let fileData: Buffer;
    if (file instanceof Buffer) {
      fileData = file;
    } else if (typeof window !== "undefined" && file instanceof Blob) {
      // 浏览器Blob/File
      fileData = Buffer.from(await (file as Blob).arrayBuffer());
    } else if ((file as File).arrayBuffer) {
      // 兼容Node.js FileLike
      fileData = Buffer.from(await (file as File).arrayBuffer());
    } else {
      throw new Error("不支持的文件类型");
    }
    return new Promise((resolve, reject) => {
      this.formUploader.put(
        this.uploadToken,
        uploadKey,
        fileData,
        new qiniu.form_up.PutExtra(),
        (err, body, info) => {
          if (err) return reject(err);
          if (info.statusCode === 200) {
            resolve({
              path: "/" + uploadKey,
              type: (file as File)?.type || "unknown",
              url: this.config.baseUrl
                ? `${this.config.baseUrl}/${uploadKey}`
                : undefined,
            });
          } else {
            reject(body);
          }
        }
      );
    });
  }

  /**
   * 批量上传文件，files为File/Buffer/Blob数组
   * @param files 文件数组
   * @returns 七牛云上传结果数组
   * @example
   * const files = [
   *   new File(["Hello, world!"], "hello.txt", { type: "text/plain" }),
   *   new File(["Hello, world!"], "hello.txt", { type: "text/plain" }),
   * ];
   * const results = await uploader.uploadFiles(files);
   * console.log(results); // [{ path: "/your-base-path/1719852000-123456.txt", type: "text/plain", url: "https://your-bucket.qiniucdn.com/your-base-path/1719852000-123456.txt" }, { path: "/your-base-path/1719852000-123456.txt", type: "text/plain", url: "https://your-bucket.qiniucdn.com/your-base-path/1719852000-123456.txt" }]
   */
  async uploadFiles(files: QiniuBatchInput): Promise<QiniuUploadResult[]> {
    const results: QiniuUploadResult[] = [];
    for (const file of files) {
      results.push(await this.uploadFile(file));
    }
    return results;
  }
}
