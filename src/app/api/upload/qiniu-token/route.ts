import { NextRequest, NextResponse } from "next/server";
import * as qiniu from "qiniu";
import { qiniuConfig } from "@/config-lib/qiniu/config";

/**
 * 根据zone获取七牛云上传地址
 * 注意：七牛云的上传地址格式是 up-{zone}.qiniup.com
 */
function getUploadUrl(zone?: string): string {
  const zoneMap: Record<string, string> = {
    z0: "https://up-z0.qiniup.com", // 华东
    z1: "https://up-z1.qiniup.com", // 华北
    z2: "https://up-z2.qiniup.com", // 华南
    na0: "https://up-na0.qiniup.com", // 北美
    as0: "https://up-as0.qiniup.com", // 东南亚
  };
  
  // 优先使用配置的zone，如果没有则根据bucket自动判断
  // 根据错误信息，bucket是sanjiawujie，应该使用z2（华南）
  const zoneKey = zone || qiniuConfig.zone || "z2"; // 默认使用z2（华南）
  return zoneMap[zoneKey] || zoneMap.z2;
}

/**
 * 获取七牛云上传Token
 * 用于前端直接上传到七牛云，避免经过后端中转
 * 支持大文件上传、后台上传、断点续传
 */
export async function GET(request: NextRequest) {
  try {
    const mac = new qiniu.auth.digest.Mac(qiniuConfig.accessKey, qiniuConfig.secretKey);
    const putPolicy = new qiniu.rs.PutPolicy({
      scope: qiniuConfig.bucket,
      expires: 3600, // token有效期1小时
    });
    const uploadToken = putPolicy.uploadToken(mac);

    return NextResponse.json({
      success: true,
      data: {
        token: uploadToken,
        bucket: qiniuConfig.bucket,
        baseUrl: qiniuConfig.baseUrl,
        dirPath: qiniuConfig.dirPath,
        uploadUrl: getUploadUrl(qiniuConfig.zone), // 返回上传地址
      },
    });
  } catch (error) {
    console.error("生成七牛云token失败:", error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "生成token失败",
      },
      { status: 500 }
    );
  }
}
