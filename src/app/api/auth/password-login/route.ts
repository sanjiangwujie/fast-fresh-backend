import { NextRequest, NextResponse } from "next/server";
import { HasuraJwtToken } from "@/config-lib/hasura/HasuraJwtToken";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";
import * as crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { phone, password } = await req.json();
    if (!phone || !password) {
      return NextResponse.json(
        { error: "手机号和密码不能为空" },
        { status: 400 }
      );
    }

    // 1. 查询用户
    const queryUserQuery = `
      query QueryUserByPhone($phone: String!) {
        users(where: { phone: { _eq: $phone } }, limit: 1) {
          id
          phone
          nickname
          avatar_url
          password
        }
      }
    `;

    const queryResult = await hasuraGraphqlClient.execute<{ 
      users: Array<{ 
        id: string; 
        phone: string; 
        nickname?: string | null; 
        avatar_url?: string | null;
        password?: string | null;
      }> 
    }>({
      query: queryUserQuery,
      variables: { phone },
    });

    if (!queryResult.users || queryResult.users.length === 0) {
      return NextResponse.json(
        { error: "用户不存在" },
        { status: 404 }
      );
    }

    const user = queryResult.users[0];

    // 2. 校验密码（md5 32位小写）
    if (!user.password) {
      return NextResponse.json(
        { error: "该账号未设置密码，请使用手机号验证码登录" },
        { status: 400 }
      );
    }

    const passwordHash = crypto.createHash("md5").update(password).digest("hex");
    if (user.password !== passwordHash) {
      return NextResponse.json(
        { error: "密码错误" },
        { status: 400 }
      );
    }

    // 3. 生成JWT token
    const userId = String(user.id);
    const token = HasuraJwtToken.generateToken({ userId });

    // 返回用户信息（不包含密码）
    const { password: _, ...userInfo } = user;

    return NextResponse.json({ 
      userId, 
      token,
      user: userInfo,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message || "服务异常" },
      { status: 500 }
    );
  }
}
