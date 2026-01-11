import { NextRequest, NextResponse } from "next/server";
import { HasuraJwtToken } from "@/config-lib/hasura/HasuraJwtToken";

export async function POST(req: NextRequest) {
  try {
    const { phone, code } = await req.json();
    if (!phone || !code) {
      return NextResponse.json(
        { error: "手机号和验证码不能为空" },
        { status: 400 }
      );
    }
    // 1. 校验验证码

    // 2. 自动注册/登录，获取用户id

    const userId = "0";

    // 3. 生成JWT token
    const token = HasuraJwtToken.generateToken({ userId });
    return NextResponse.json({ userId, token });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message || "服务异常" },
      { status: 500 }
    );
  }
}
