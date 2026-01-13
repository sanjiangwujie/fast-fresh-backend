import { NextRequest, NextResponse } from "next/server";
import { HasuraJwtToken } from "@/config-lib/hasura/HasuraJwtToken";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";
import cacheStore from "@/config-lib/cache-store/cache-store";

export async function POST(req: NextRequest) {
  try {
    const { phone, code } = await req.json();
    if (!phone || !code) {
      return NextResponse.json(
        { error: "手机号和验证码不能为空" },
        { status: 400 }
      );
    }

    // 1. 校验验证码（从缓存中读取）
    const cacheKey = `sms_code_${phone}`;
    const cachedCode = cacheStore.get(cacheKey);
    if (!cachedCode || cachedCode !== code) {
      return NextResponse.json(
        { error: "验证码错误或已过期" },
        { status: 400 }
      );
    }
    // 验证成功后删除验证码
    cacheStore.delete(cacheKey);

    // 2. 查询用户是否存在
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

    // 3. 生成JWT token
    const token = HasuraJwtToken.generateToken({ userId });
    return NextResponse.json({ 
      userId, 
      token,
      user,
    });
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message || "服务异常" },
      { status: 500 }
    );
  }
}
