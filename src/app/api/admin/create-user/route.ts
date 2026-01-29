import { NextRequest, NextResponse } from "next/server";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";
import * as crypto from "crypto";

/** POST: 新增用户（仅手机号 + 初始密码，不分配角色） */
export async function POST(req: NextRequest) {
  try {
    const { phone, password } = await req.json();

    if (!phone) {
      return NextResponse.json({ error: "手机号不能为空" }, { status: 400 });
    }
    if (!password) {
      return NextResponse.json({ error: "初始密码不能为空" }, { status: 400 });
    }

    const checkQuery = `
      query CheckPhone($phone: String!) {
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
      return NextResponse.json({ error: "该手机号已注册" }, { status: 400 });
    }

    const passwordHash = crypto.createHash("md5").update(password).digest("hex");

    const mutation = `
      mutation CreateUser($phone: String!, $password: String!) {
        insert_users_one(object: { phone: $phone, password: $password }) {
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
      variables: { phone, password: passwordHash },
    });

    if (!result.insert_users_one) {
      return NextResponse.json({ error: "创建用户失败" }, { status: 500 });
    }
    return NextResponse.json({ user: result.insert_users_one });
  } catch (e: unknown) {
    console.error("创建用户失败:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "服务异常" },
      { status: 500 }
    );
  }
}
