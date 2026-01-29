import { NextRequest, NextResponse } from "next/server";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";

/** POST: 修改果农绑定的用户。body: { farmerId, userId } */
export async function POST(req: NextRequest) {
  try {
    const { farmerId, userId } = await req.json();
    if (!farmerId) {
      return NextResponse.json({ error: "farmerId 不能为空" }, { status: 400 });
    }
    if (!userId) {
      return NextResponse.json({ error: "userId 不能为空" }, { status: 400 });
    }
    const fid = Number(farmerId);
    const uid = Number(userId);
    if (Number.isNaN(fid) || Number.isNaN(uid)) {
      return NextResponse.json({ error: "参数格式错误" }, { status: 400 });
    }

    const check = `
      query Check($farmerId: bigint!, $userId: bigint!) {
        farmers_by_pk(id: $farmerId) { id }
        users_by_pk(id: $userId) { id }
      }
    `;
    const r = await hasuraGraphqlClient.execute<{
      farmers_by_pk: { id: string } | null;
      users_by_pk: { id: string } | null;
    }>({ query: check, variables: { farmerId: fid, userId: uid } });
    if (!r.farmers_by_pk) {
      return NextResponse.json({ error: "果农记录不存在" }, { status: 404 });
    }
    if (!r.users_by_pk) {
      return NextResponse.json({ error: "用户不存在" }, { status: 404 });
    }

    await hasuraGraphqlClient.execute({
      query: `
        mutation UpdateFarmerUser($id: bigint!, $user_users: bigint!) {
          update_farmers_by_pk(pk_columns: { id: $id }, _set: { user_users: $user_users }) {
            id
          }
        }
      `,
      variables: { id: fid, user_users: uid },
    });

    const hasFarmerRole = await hasuraGraphqlClient.execute<{ user_roles: Array<{ id: string }> }>({
      query: `
        query HasFarmerRole($userId: bigint!) {
          user_roles(where: { user_users: { _eq: $userId }, role_type: { _eq: "farmer" } }) { id }
        }
      `,
      variables: { userId: uid },
    });
    if (!hasFarmerRole.user_roles || hasFarmerRole.user_roles.length === 0) {
      await hasuraGraphqlClient.execute({
        query: `
          mutation InsertFarmerRole($user_users: bigint!) {
            insert_user_roles_one(object: { user_users: $user_users, role_type: "farmer" }) {
              id
            }
          }
        `,
        variables: { user_users: uid },
      });
    }

    return NextResponse.json({ ok: true, message: "已更新果农绑定用户" });
  } catch (e: unknown) {
    console.error("update-farmer-user 失败:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "服务异常" },
      { status: 500 }
    );
  }
}
