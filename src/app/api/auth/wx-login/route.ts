import { NextRequest, NextResponse } from "next/server";
import { WxAuth } from "@/config-lib/weixin/miniprogram/WxAuth";
import { HasuraJwtToken } from "@/config-lib/hasura/HasuraJwtToken";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";

const wxAuth = new WxAuth();

export async function POST(req: NextRequest) {
  try {
    const { code, codeSource } = await req.json();
    if (!code || !codeSource) {
      return NextResponse.json({ error: "code和codeSource不能为空" }, { status: 400 });
    }

    // 检查微信配置
    const { wxAuthConfig } = await import("@/config-lib/weixin/config");
    if (!wxAuthConfig.appId || !wxAuthConfig.appSecret) {
      console.error("微信配置缺失:", { 
        hasAppId: !!wxAuthConfig.appId, 
        hasAppSecret: !!wxAuthConfig.appSecret 
      });
      return NextResponse.json({ 
        error: "服务器配置错误：请检查 WX_APP_ID 和 WX_APP_SECRET 环境变量是否已配置" 
      }, { status: 500 });
    }

    let phone: string | undefined;
    if (codeSource === "phone") {
      // 通过手机号开发标签code获取手机号
      try {
        const phoneRes = await wxAuth.getUserPhoneNumber(code);
        phone = phoneRes?.phone_info?.phoneNumber;
        if (!phone) {
          console.error("获取手机号失败，响应:", phoneRes);
          return NextResponse.json({ 
            error: `获取手机号失败：${phoneRes?.errmsg || "未知错误"}` 
          }, { status: 400 });
        }
      } catch (error: any) {
        console.error("调用微信API失败:", error);
        return NextResponse.json({ 
          error: `获取手机号失败：${error.message || "未知错误"}` 
        }, { status: 400 });
      }
    } else if (codeSource === "login") {
      // 通过wx.login code获取openid/session_key，实际业务可扩展
      // 这里只做演示，实际还需前端配合解密手机号
      return NextResponse.json({ error: "请用手机号开发标签code登录" }, { status: 400 });
    } else {
      return NextResponse.json({ error: "codeSource不合法" }, { status: 400 });
    }

    // 查询用户是否存在
    const queryUserQuery = `
      query QueryUserByPhone($phone: String!) {
        users(where: { phone: { _eq: $phone } }, limit: 1) {
          id
          phone
          nickname
          avatar_url
        }
      }
    `;

    const queryResult = await hasuraGraphqlClient.execute<{ users: Array<{ id: string; phone: string; nickname?: string | null; avatar_url?: string | null }> }>({
      query: queryUserQuery,
      variables: { phone },
    });

    let userId: string;
    let user: { id: string; phone: string; nickname?: string | null; avatar_url?: string | null } | null = null;

    if (queryResult.users && queryResult.users.length > 0) {
      // 用户已存在，直接登录
      user = queryResult.users[0];
      userId = String(user.id);
    } else {
      // 用户不存在，自动注册
      const insertUserMutation = `
        mutation InsertUser($phone: String!, $nickname: String!) {
          insert_users_one(object: { phone: $phone, nickname: $nickname }) {
            id
            phone
            nickname
            avatar_url
          }
        }
      `;

      const insertResult = await hasuraGraphqlClient.execute<{ insert_users_one: { id: string; phone: string; nickname?: string | null; avatar_url?: string | null } | null }>({
        query: insertUserMutation,
        variables: {
          phone,
          nickname: `用户${phone.slice(-4)}`, // 默认昵称使用手机号后4位
        },
      });

      if (!insertResult.insert_users_one || !insertResult.insert_users_one.id) {
        return NextResponse.json({ error: "注册失败" }, { status: 500 });
      }
      user = insertResult.insert_users_one;
      userId = String(user.id);
    }

    // 生成JWT token
    const token = HasuraJwtToken.generateToken({ userId });
    return NextResponse.json({ 
      userId, 
      token,
      user,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "服务异常" }, { status: 500 });
  }
} 