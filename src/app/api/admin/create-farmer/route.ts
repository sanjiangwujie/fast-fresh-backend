import { NextRequest, NextResponse } from "next/server";
import hasuraGraphqlClient from "@/config-lib/hasura-graphql-client/hasura-graphql-client";
import * as crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const { phone, nickname, password, farmer_name } = await req.json();
    
    if (!phone) {
      return NextResponse.json(
        { error: "手机号不能为空" },
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
          user_roles(where: { role_type: { _eq: "farmer" } }) {
            id
            role_type
          }
          farmers {
            id
            name
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
        farmers: Array<{ id: string; name?: string | null }>;
      }> 
    }>({
      query: checkQuery,
      variables: { phone },
    });

    const existingUser = checkResult.users && checkResult.users.length > 0 ? checkResult.users[0] : null;

    if (existingUser) {
      // 用户已存在，只需要添加角色和 farmers 记录
      const userId = existingUser.id;
      let needUpdateUser = false;
      const updateData: any = {};

      // 更新用户信息（如果有新值）
      if (nickname && nickname !== existingUser.nickname) {
        updateData.nickname = nickname;
        needUpdateUser = true;
      }

      // 更新密码（如果提供了）
      if (password) {
        const passwordHash = crypto.createHash("md5").update(password).digest("hex");
        updateData.password = passwordHash;
        needUpdateUser = true;
      }

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
            password: updateData.password || null,
          },
        });
      }

      // 检查并添加 farmer 角色
      const hasFarmerRole = existingUser.user_roles && existingUser.user_roles.length > 0;
      if (!hasFarmerRole) {
        const insertRoleMutation = `
          mutation InsertFarmerRole($user_users: bigint!) {
            insert_user_roles_one(
              object: { user_users: $user_users, role_type: "farmer" }
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

      // 检查并添加 farmers 记录
      const hasFarmerRecord = existingUser.farmers && existingUser.farmers.length > 0;
      if (!hasFarmerRecord) {
        const insertFarmerMutation = `
          mutation InsertFarmer($user_users: bigint!, $name: String) {
            insert_farmers_one(
              object: { user_users: $user_users, name: $name }
            ) {
              id
              name
            }
          }
        `;

        try {
          await hasuraGraphqlClient.execute({
            query: insertFarmerMutation,
            variables: {
              user_users: userId,
              name: farmer_name || null,
            },
          });
        } catch (error: any) {
          // 如果 farmers 记录已存在（唯一约束冲突），忽略错误
          if (!error.message?.includes("duplicate") && !error.message?.includes("unique")) {
            throw error;
          }
          console.log("Farmers 记录可能已存在:", error.message);
        }
      } else if (farmer_name && farmer_name !== existingUser.farmers[0].name) {
        // 如果 farmers 记录已存在但名称不同，更新名称
        const updateFarmerMutation = `
          mutation UpdateFarmer($id: bigint!, $name: String) {
            update_farmers_by_pk(
              pk_columns: { id: $id }
              _set: { name: $name }
            ) {
              id
              name
            }
          }
        `;

        await hasuraGraphqlClient.execute({
          query: updateFarmerMutation,
          variables: {
            id: existingUser.farmers[0].id,
            name: farmer_name,
          },
        });
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
    // 准备密码（如果有）
    let passwordHash = null;
    if (password) {
      passwordHash = crypto.createHash("md5").update(password).digest("hex");
    }

    // 创建用户，同时创建user_roles和farmers记录
    const mutation = `
      mutation CreateFarmerAccount(
        $phone: String!
        $nickname: String
        $password: String
        $farmer_name: String
      ) {
        insert_users_one(
          object: {
            phone: $phone
            nickname: $nickname
            password: $password
            user_roles: {
              data: { role_type: "farmer" }
            }
            farmers: {
              data: { name: $farmer_name }
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
        farmer_name: farmer_name || null,
      },
    });

    if (!result.insert_users_one) {
      return NextResponse.json(
        { error: "创建果农账号失败" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      user: result.insert_users_one,
    });
  } catch (e: any) {
    console.error("创建果农账号失败:", e);
    return NextResponse.json(
      { error: e.message || "服务异常" },
      { status: 500 }
    );
  }
}
