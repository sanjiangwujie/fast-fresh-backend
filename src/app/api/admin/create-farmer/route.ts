import { NextRequest, NextResponse } from "next/server";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";

/** POST: 新增果农。body: { phone?, farmer_name }。有 phone 则绑定该用户；无 phone 则仅创建果农记录（不绑定用户），供用户管理里添加果农角色时选择 */
export async function POST(req: NextRequest) {
  try {
    const { phone, farmer_name } = await req.json();
    const name = (farmer_name || "").trim() || null;

    if (!phone) {
      // 仅创建果农记录，不绑定用户
      const insertFarmer = `
        mutation InsertFarmerNoUser($name: String) {
          insert_farmers_one(object: { name: $name }) {
            id
            name
            user_users
          }
        }
      `;
      const result = await hasuraGraphqlClient.execute<{
        insert_farmers_one: { id: string; name: string | null; user_users: string | null };
      }>({
        query: insertFarmer,
        variables: { name },
      });
      return NextResponse.json({
        farmer: result.insert_farmers_one,
        user: null,
      });
    }

    const checkQuery = `
      query CheckUser($phone: String!) {
        users(where: { phone: { _eq: $phone } }, limit: 1) {
          id
          user_roles(where: { role_type: { _eq: "farmer" } }) { id }
          farmers { id }
        }
      }
    `;
    const checkResult = await hasuraGraphqlClient.execute<{
      users: Array<{
        id: string;
        user_roles: Array<{ id: string }>;
        farmers: Array<{ id: string }>;
      }>;
    }>({
      query: checkQuery,
      variables: { phone },
    });

    const user = checkResult.users?.[0];
    if (!user) {
      return NextResponse.json({ error: "未找到该手机号对应的用户，请先创建用户" }, { status: 400 });
    }

    const userId = Number(user.id);

    if (user.farmers && user.farmers.length > 0) {
      return NextResponse.json({ error: "该用户已绑定果农" }, { status: 400 });
    }

    const insertFarmer = `
      mutation InsertFarmer($user_users: bigint!, $name: String) {
        insert_farmers_one(object: { user_users: $user_users, name: $name }) {
          id
          name
          user_users
        }
      }
    `;
    const farmerResult = await hasuraGraphqlClient.execute<{
      insert_farmers_one: { id: string; name: string | null; user_users: string };
    }>({
      query: insertFarmer,
      variables: { user_users: userId, name },
    });

    if (!user.user_roles || user.user_roles.length === 0) {
      await hasuraGraphqlClient.execute({
        query: `
          mutation InsertFarmerRole($user_users: bigint!) {
            insert_user_roles_one(object: { user_users: $user_users, role_type: "farmer" }) {
              id
            }
          }
        `,
        variables: { user_users: userId },
      });
    }

    return NextResponse.json({
      farmer: farmerResult.insert_farmers_one,
      user: { id: user.id },
    });
  } catch (e: unknown) {
    console.error("create-farmer 失败:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "服务异常" },
      { status: 500 }
    );
  }
}
