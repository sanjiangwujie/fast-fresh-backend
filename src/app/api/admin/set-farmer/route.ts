import { NextRequest, NextResponse } from "next/server";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";

/** POST: 给用户绑定果农并添加果农角色。body: { userId, farmerId }，果农须为未绑定用户的记录 */
export async function POST(req: NextRequest) {
  try {
    const { userId, farmerId } = await req.json();
    if (!userId) {
      return NextResponse.json({ error: "userId 不能为空" }, { status: 400 });
    }
    if (!farmerId) {
      return NextResponse.json({ error: "farmerId 不能为空" }, { status: 400 });
    }
    const uid = Number(userId);
    const fid = Number(farmerId);
    if (Number.isNaN(uid) || Number.isNaN(fid)) {
      return NextResponse.json({ error: "参数格式错误" }, { status: 400 });
    }

    const check = `
      query Check($userId: bigint!, $farmerId: bigint!) {
        users_by_pk(id: $userId) { id }
        farmers_by_pk(id: $farmerId) {
          id
          user_users
        }
        user_roles(where: { user_users: { _eq: $userId }, role_type: { _eq: "farmer" } }) { id }
      }
    `;
    const r = await hasuraGraphqlClient.execute<{
      users_by_pk: { id: string } | null;
      farmers_by_pk: { id: string; user_users: string | null } | null;
      user_roles: Array<{ id: string }>;
    }>({ query: check, variables: { userId: uid, farmerId: fid } });
    if (!r.users_by_pk) {
      return NextResponse.json({ error: "用户不存在" }, { status: 404 });
    }
    if (!r.farmers_by_pk) {
      return NextResponse.json({ error: "果农记录不存在" }, { status: 404 });
    }
    if (r.farmers_by_pk.user_users != null) {
      return NextResponse.json({ error: "该果农已绑定用户，请选择未绑定的果农" }, { status: 400 });
    }

    // 一个用户只能绑定一个果农：若该用户已绑定其他果农，先清空再绑定新果农
    await hasuraGraphqlClient.execute({
      query: `
        mutation UnbindFarmersForUser($user_users: bigint!) {
          update_farmers(
            where: { user_users: { _eq: $user_users } }
            _set: { user_users: null }
          ) {
            affected_rows
          }
        }
      `,
      variables: { user_users: uid },
    });

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

    if (!r.user_roles || r.user_roles.length === 0) {
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
    return NextResponse.json({ ok: true, message: "已绑定果农并添加角色" });
  } catch (e: unknown) {
    console.error("set-farmer 失败:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "服务异常" },
      { status: 500 }
    );
  }
}
