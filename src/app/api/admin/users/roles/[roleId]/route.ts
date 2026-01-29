import { NextRequest, NextResponse } from "next/server";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";

/**
 * DELETE: 删除用户下的某个角色。
 * 若删除的是果农角色，会先把该用户绑定的果农账号清掉（farmers.user_users 置为 null），再删除角色。
 */
export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ roleId: string }> }
) {
  try {
    const { roleId } = await params;
    if (!roleId) {
      return NextResponse.json({ error: "角色ID不能为空" }, { status: 400 });
    }
    const roleIdNum = Number(roleId);
    if (Number.isNaN(roleIdNum)) {
      return NextResponse.json({ error: "角色ID格式错误" }, { status: 400 });
    }

    const getRoleQuery = `
      query GetRole($id: bigint!) {
        user_roles_by_pk(id: $id) {
          id
          role_type
          user_users
        }
      }
    `;
    const roleResult = await hasuraGraphqlClient.execute<{
      user_roles_by_pk: { id: string; role_type: string | null; user_users: string } | null;
    }>({
      query: getRoleQuery,
      variables: { id: roleIdNum },
    });

    const role = roleResult.user_roles_by_pk;
    if (!role) {
      return NextResponse.json({ error: "角色不存在或已删除" }, { status: 404 });
    }

    if (role.role_type === "farmer") {
      const userId = Number(role.user_users);
      await hasuraGraphqlClient.execute({
        query: `
          mutation UnbindFarmer($user_users: bigint!) {
            update_farmers(
              where: { user_users: { _eq: $user_users } }
              _set: { user_users: null }
            ) {
              affected_rows
            }
          }
        `,
        variables: { user_users: userId },
      });
    }

    const deleteMutation = `
      mutation DeleteRole($id: bigint!) {
        delete_user_roles_by_pk(id: $id) {
          id
        }
      }
    `;
    const deleteResult = await hasuraGraphqlClient.execute<{
      delete_user_roles_by_pk: { id: string } | null;
    }>({
      query: deleteMutation,
      variables: { id: roleIdNum },
    });

    if (!deleteResult.delete_user_roles_by_pk) {
      return NextResponse.json({ error: "角色删除失败" }, { status: 500 });
    }
    return NextResponse.json({ ok: true, message: "角色已删除" });
  } catch (e: unknown) {
    console.error("删除角色失败:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "服务异常" },
      { status: 500 }
    );
  }
}
