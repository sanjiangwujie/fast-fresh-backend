import { NextRequest, NextResponse } from "next/server";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";
import * as crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { phone, nickname, password } = await req.json();
    
    if (!phone) {
      return NextResponse.json(
        { error: "手机号不能为空" },
        { status: 400 }
      );
    }

    if (!password) {
      return NextResponse.json(
        { error: "密码不能为空" },
        { status: 400 }
      );
    }

    // 检查手机号是否已存在
    const checkQuery = `
      query CheckUser($phone: String!) {
        users(where: { phone: { _eq: $phone } }, limit: 1) {
          id
        }
      }
    `;

    const checkResult = await hasuraGraphqlClient.execute<{ users: Array<{ id: string }> }>({
      query: checkQuery,
      variables: { phone },
    });

    if (checkResult.users && checkResult.users.length > 0) {
      return NextResponse.json(
        { error: "该手机号已被注册" },
        { status: 400 }
      );
    }

    // MD5加密密码
    const passwordHash = crypto.createHash("md5").update(password).digest("hex");

    // 创建用户，同时创建user_roles记录
    const mutation = `
      mutation CreateOperatorAccount(
        $phone: String!
        $nickname: String
        $password: String!
      ) {
        insert_users_one(
          object: {
            phone: $phone
            nickname: $nickname
            password: $password
            user_roles: {
              data: { role_type: "operator" }
            }
          }
        ) {
          id
          phone
          nickname
          avatar_url
          created_at
          updated_at
        }
      }
    `;

    const result = await hasuraGraphqlClient.execute<{
      insert_users_one: {
        id: string;
        phone: string;
        nickname?: string | null;
        avatar_url?: string | null;
        created_at: string;
        updated_at: string;
      } | null;
    }>({
      query: mutation,
      variables: {
        phone,
        nickname: nickname || null,
        password: passwordHash,
      },
    });

    if (!result.insert_users_one) {
      return NextResponse.json(
        { error: "创建运营账号失败" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      user: result.insert_users_one,
    });
  } catch (e: any) {
    console.error("创建运营账号失败:", e);
    return NextResponse.json(
      { error: e.message || "服务异常" },
      { status: 500 }
    );
  }
}
