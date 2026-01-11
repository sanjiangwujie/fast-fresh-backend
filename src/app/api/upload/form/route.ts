import { NextRequest, NextResponse } from 'next/server';
import { QiniuUploader } from '@/config-lib/qiniu/QiniuUploader';
import { qiniuConfig } from '@/config-lib/qiniu/config';

const uploader = new QiniuUploader(qiniuConfig);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('file');
    if (!files || files.length === 0) {
      return NextResponse.json({ error: '没有提供文件' }, { status: 400 });
    }
    const results = [];
    for (const file of files) {
      const result = await uploader.uploadFile(file as File);
      results.push(result);
    }
    return NextResponse.json({
      success: true,
      message: files.length > 1 ? '多文件上传成功' : '文件上传成功',
      data: files.length > 1 ? results : results[0],
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: error instanceof Error ? error.message : '上传失败',
    }, { status: 500 });
  }
} 