import { NextRequest, NextResponse } from "next/server";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";

/** POST: 给用户添加运营角色 */
export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json();
    if (!userId) {
      return NextResponse.json({ error: "userId 不能为空" }, { status: 400 });
    }
    const uid = Number(userId);
    if (Number.isNaN(uid)) {
      return NextResponse.json({ error: "userId 格式错误" }, { status: 400 });
    }

    const check = `
      query Check($userId: bigint!) {
        users_by_pk(id: $userId) { id }
        user_roles(where: { user_users: { _eq: $userId }, role_type: { _eq: "operator" } }) { id }
      }
    `;
    const r = await hasuraGraphqlClient.execute<{
      users_by_pk: { id: string } | null;
      user_roles: Array<{ id: string }>;
    }>({ query: check, variables: { userId: uid } });
    if (!r.users_by_pk) {
      return NextResponse.json({ error: "用户不存在" }, { status: 404 });
    }
    if (r.user_roles && r.user_roles.length > 0) {
      return NextResponse.json({ ok: true, message: "已是运营" });
    }

    const mutation = `
      mutation InsertOperatorRole($user_users: bigint!) {
        insert_user_roles_one(object: { user_users: $user_users, role_type: "operator" }) {
          id
        }
      }
    `;
    await hasuraGraphqlClient.execute({
      query: mutation,
      variables: { user_users: uid },
    });
    return NextResponse.json({ ok: true, message: "已设为运营" });
  } catch (e: unknown) {
    console.error("set-operator 失败:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "服务异常" },
      { status: 500 }
    );
  }
}
