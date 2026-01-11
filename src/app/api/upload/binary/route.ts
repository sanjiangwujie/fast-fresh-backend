import { NextRequest, NextResponse } from "next/server";
import { QiniuUploader } from "@/config-lib/qiniu/QiniuUploader";
import { qiniuConfig } from "@/config-lib/qiniu/config";

const uploader = new QiniuUploader(qiniuConfig);

export async function POST(request: NextRequest) {
  try {
    // 支持自定义文件名和路径，通过header传递
    const xFilename = request.headers.get("x-filename")||"x-filename.file";
    const arrayBuffer = await request.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const file = new File([buffer], decodeURIComponent(xFilename));
    const result = await uploader.uploadFile(file);
    return NextResponse.json({
      success: true,
      message: "文件上传成功",
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : "上传失败",
      },
      { status: 500 }
    );
  }
}
