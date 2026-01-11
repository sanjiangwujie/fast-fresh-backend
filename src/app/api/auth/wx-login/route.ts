import { NextRequest, NextResponse } from "next/server";
import { WxAuth } from "@/config-lib/weixin/miniprogram/WxAuth";
import { HasuraJwtToken } from "@/config-lib/hasura/HasuraJwtToken";

const wxAuth = new WxAuth();

export async function POST(req: NextRequest) {
  try {
    const { code, codeSource } = await req.json();
    if (!code || !codeSource) {
      return NextResponse.json({ error: "code和codeSource不能为空" }, { status: 400 });
    }
    let phone: string | undefined;
    if (codeSource === "phone") {
      // 通过手机号开发标签code获取手机号
      const phoneRes = await wxAuth.getUserPhoneNumber(code);
      phone = phoneRes?.phone_info?.phoneNumber;
      if (!phone) {
        return NextResponse.json({ error: "获取手机号失败" }, { status: 400 });
      }
    } else if (codeSource === "login") {
      // 通过wx.login code获取openid/session_key，实际业务可扩展
      // 这里只做演示，实际还需前端配合解密手机号
      return NextResponse.json({ error: "请用手机号开发标签code登录" }, { status: 400 });
    } else {
      return NextResponse.json({ error: "codeSource不合法" }, { status: 400 });
    }
    // 自动注册/登录
    const userId = "0"
    if (!userId) {
      return NextResponse.json({ error: "注册或登录失败" }, { status: 500 });
    }
    // 生成JWT token
    const token = HasuraJwtToken.generateToken({ userId });
    return NextResponse.json({ userId, token });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "服务异常" }, { status: 500 });
  }
} 