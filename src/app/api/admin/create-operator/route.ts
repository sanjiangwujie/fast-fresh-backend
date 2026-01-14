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

    // 检查手机号是否已存在，并获取用户信息和角色信息
    const checkQuery = `
      query CheckUser($phone: String!) {
        users(where: { phone: { _eq: $phone } }, limit: 1) {
          id
          phone
          nickname
          avatar_url
          created_at
          updated_at
          user_roles(where: { role_type: { _eq: "operator" } }) {
            id
            role_type
          }
        }
      }
    `;

    const checkResult = await hasuraGraphqlClient.execute<{ 
      users: Array<{ 
        id: string;
        phone: string;
        nickname?: string | null;
        avatar_url?: string | null;
        created_at: string;
        updated_at: string;
        user_roles: Array<{ id: string; role_type: string | null }>;
      }> 
    }>({
      query: checkQuery,
      variables: { phone },
    });

    const existingUser = checkResult.users && checkResult.users.length > 0 ? checkResult.users[0] : null;

    if (existingUser) {
      // 用户已存在，只需要添加 operator 角色
      const userId = existingUser.id;
      let needUpdateUser = false;
      const updateData: any = {};

      // 更新用户信息（如果有新值）
      if (nickname && nickname !== existingUser.nickname) {
        updateData.nickname = nickname;
        needUpdateUser = true;
      }

      // 更新密码
      const passwordHash = crypto.createHash("md5").update(password).digest("hex");
      updateData.password = passwordHash;
      needUpdateUser = true;

      // 更新用户信息
      if (needUpdateUser) {
        const updateUserMutation = `
          mutation UpdateUser($id: bigint!, $nickname: String, $password: String) {
            update_users_by_pk(
              pk_columns: { id: $id }
              _set: { nickname: $nickname, password: $password }
            ) {
              id
            }
          }
        `;

        await hasuraGraphqlClient.execute({
          query: updateUserMutation,
          variables: {
            id: userId,
            nickname: updateData.nickname || null,
            password: updateData.password,
          },
        });
      }

      // 检查并添加 operator 角色
      const hasOperatorRole = existingUser.user_roles && existingUser.user_roles.length > 0;
      if (!hasOperatorRole) {
        const insertRoleMutation = `
          mutation InsertOperatorRole($user_users: bigint!) {
            insert_user_roles_one(
              object: { user_users: $user_users, role_type: "operator" }
            ) {
              id
            }
          }
        `;

        try {
          await hasuraGraphqlClient.execute({
            query: insertRoleMutation,
            variables: {
              user_users: userId,
            },
          });
        } catch (error: any) {
          // 如果角色已存在（唯一约束冲突），忽略错误
          if (!error.message?.includes("duplicate") && !error.message?.includes("unique")) {
            throw error;
          }
          console.log("角色可能已存在:", error.message);
        }
      }

      // 返回更新后的用户信息
      const finalUserQuery = `
        query GetUser($id: bigint!) {
          users_by_pk(id: $id) {
            id
            phone
            nickname
            avatar_url
            created_at
            updated_at
          }
        }
      `;

      const finalResult = await hasuraGraphqlClient.execute<{
        users_by_pk: {
          id: string;
          phone: string;
          nickname?: string | null;
          avatar_url?: string | null;
          created_at: string;
          updated_at: string;
        } | null;
      }>({
        query: finalUserQuery,
        variables: { id: userId },
      });

      return NextResponse.json({
        user: finalResult.users_by_pk,
      });
    }

    // 用户不存在，创建新用户
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
