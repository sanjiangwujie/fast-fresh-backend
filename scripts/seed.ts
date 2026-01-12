/**
 * 数据库假数据填充脚本
 * 使用方式: npx tsx scripts/seed.ts
 */

import { getHasuraClient } from "../src/config-lib/hasura-graphql-client/hasura-graphql-client";

const client = getHasuraClient();

async function seed() {
  try {
    console.log("开始填充假数据...\n");

    // 1. 插入用户（使用 upsert，如果已存在则更新）
    console.log("1. 插入用户...");
    const insertUsers = `
      mutation InsertUsers($objects: [users_insert_input!]!) {
        insert_users(
          objects: $objects
          on_conflict: {
            constraint: users_phone_key
            update_columns: [nickname]
          }
        ) {
          returning {
            id
            phone
            nickname
          }
        }
      }
    `;

    // 先查询用户是否存在
    const queryUsers = `
      query QueryUsers($phones: [String!]!) {
        users(where: { phone: { _in: $phones } }) {
          id
          phone
          nickname
        }
      }
    `;

    const existingUsersResult = await client.execute<{ users: any[] }>({
      query: queryUsers,
      variables: {
        phones: ["13800138001", "13800138002", "13800138003", "13800138004", "13800138005"],
      },
    });

    let users = existingUsersResult.users || [];

    // 如果用户不存在，则插入
    if (users.length < 5) {
      const usersResult = await client.execute({
        query: insertUsers,
        variables: {
          objects: [
            {
              phone: "13800138001",
              nickname: "运营负责人",
            },
            {
              phone: "13800138002",
              nickname: "张三果农",
            },
            {
              phone: "13800138003",
              nickname: "李四果农",
            },
            {
              phone: "13800138004",
              nickname: "普通用户1",
            },
            {
              phone: "13800138005",
              nickname: "普通用户2",
            },
          ],
        },
      });

      users = usersResult.insert_users?.returning || users;
    }

    console.log(`   ✓ 找到/插入 ${users.length} 个用户`);

    // 按手机号排序，确保顺序一致
    users.sort((a, b) => a.phone.localeCompare(b.phone));
    const operatorUser = users.find((u) => u.phone === "13800138001") || users[0];
    const farmer1 = users.find((u) => u.phone === "13800138002") || users[1];
    const farmer2 = users.find((u) => u.phone === "13800138003") || users[2];
    const customer1 = users.find((u) => u.phone === "13800138004") || users[3];
    const customer2 = users.find((u) => u.phone === "13800138005") || users[4];

    // 2. 插入用户角色（使用 upsert）
    console.log("2. 插入用户角色...");
    const insertUserRoles = `
      mutation InsertUserRoles($objects: [user_roles_insert_input!]!) {
        insert_user_roles(
          objects: $objects
          on_conflict: {
            constraint: user_roles_user_users_key
            update_columns: [role_type]
          }
        ) {
          returning {
            id
          }
        }
      }
    `;

    try {
      await client.execute({
        query: insertUserRoles,
        variables: {
          objects: [
            {
              user_users: operatorUser.id,
              role_type: "operator",
            },
            {
              user_users: farmer1.id,
              role_type: "farmer",
            },
            {
              user_users: farmer2.id,
              role_type: "farmer",
            },
          ],
        },
      });
      console.log("   ✓ 插入/更新用户角色");
    } catch (error: any) {
      console.log("   ⚠ 用户角色可能已存在，跳过");
    }

    // 3. 插入果农（使用 upsert）
    console.log("3. 插入果农...");
    const queryFarmers = `
      query QueryFarmers($userIds: [bigint!]!) {
        farmers(where: { user_users: { _in: $userIds } }) {
          id
          user_users
          name
        }
      }
    `;

    const existingFarmersResult = await client.execute<{ farmers: any[] }>({
      query: queryFarmers,
      variables: {
        userIds: [farmer1.id, farmer2.id],
      },
    });

    let farmers = existingFarmersResult.farmers || [];

    if (farmers.length < 2) {
      const insertFarmers = `
        mutation InsertFarmers($objects: [farmers_insert_input!]!) {
          insert_farmers(
            objects: $objects
            on_conflict: {
              constraint: farmers_user_users_key
              update_columns: [name]
            }
          ) {
            returning {
              id
              user_users
              name
            }
          }
        }
      `;

      const farmersResult = await client.execute({
        query: insertFarmers,
        variables: {
          objects: [
            {
              user_users: farmer1.id,
              name: "张三",
            },
            {
              user_users: farmer2.id,
              name: "李四",
            },
          ],
        },
      });

      farmers = farmersResult.insert_farmers?.returning || farmers;
    }

    console.log(`   ✓ 找到/插入 ${farmers.length} 个果农`);

    const farmer1Record = farmers.find((f) => f.user_users === farmer1.id) || farmers[0];
    const farmer2Record = farmers.find((f) => f.user_users === farmer2.id) || farmers[1];

    // 4. 插入分类（查询已存在的，只插入不存在的）
    console.log("4. 插入分类...");
    const queryCategories = `
      query QueryCategories($names: [String!]!) {
        categories(where: { name: { _in: $names } }) {
          id
          name
        }
      }
    `;

    const existingCategoriesResult = await client.execute<{ categories: any[] }>({
      query: queryCategories,
      variables: {
        names: ["苹果", "香蕉", "橙子", "葡萄", "草莓"],
      },
    });

    let categories = existingCategoriesResult.categories || [];
    const categoryNames = categories.map((c) => c.name);
    const newCategories = ["苹果", "香蕉", "橙子", "葡萄", "草莓"].filter(
      (name) => !categoryNames.includes(name)
    );

    if (newCategories.length > 0) {
      const insertCategories = `
        mutation InsertCategories($objects: [categories_insert_input!]!) {
          insert_categories(objects: $objects) {
            returning {
              id
              name
            }
          }
        }
      `;

      const categoriesResult = await client.execute({
        query: insertCategories,
        variables: {
          objects: newCategories.map((name) => ({ name })),
        },
      });

      categories = [...categories, ...(categoriesResult.insert_categories?.returning || [])];
    }

    // 确保顺序一致
    const categoryMap = new Map(categories.map((c) => [c.name, c]));
    categories = ["苹果", "香蕉", "橙子", "葡萄", "草莓"].map((name) => categoryMap.get(name)!);

    console.log(`   ✓ 找到/插入 ${categories.length} 个分类`);

    // 5. 插入产地（查询已存在的，只插入不存在的）
    console.log("5. 插入产地...");
    const queryOrigins = `
      query QueryOrigins($names: [String!]!) {
        origins(where: { name: { _in: $names } }) {
          id
          name
          category_name
        }
      }
    `;

    const existingOriginsResult = await client.execute<{ origins: any[] }>({
      query: queryOrigins,
      variables: {
        names: ["山东烟台", "新疆阿克苏", "海南", "智利", "新西兰"],
      },
    });

    let origins = existingOriginsResult.origins || [];
    const originNames = origins.map((o) => o.name);
    const newOrigins = [
      { name: "山东烟台", category_name: "国内" },
      { name: "新疆阿克苏", category_name: "国内" },
      { name: "海南", category_name: "国内" },
      { name: "智利", category_name: "进口" },
      { name: "新西兰", category_name: "进口" },
    ].filter((o) => !originNames.includes(o.name));

    if (newOrigins.length > 0) {
      const insertOrigins = `
        mutation InsertOrigins($objects: [origins_insert_input!]!) {
          insert_origins(objects: $objects) {
            returning {
              id
              name
              category_name
            }
          }
        }
      `;

      const originsResult = await client.execute({
        query: insertOrigins,
        variables: {
          objects: newOrigins,
        },
      });

      origins = [...origins, ...(originsResult.insert_origins?.returning || [])];
    }

    // 确保顺序一致
    const originMap = new Map(origins.map((o) => [o.name, o]));
    origins = ["山东烟台", "新疆阿克苏", "海南", "智利", "新西兰"].map(
      (name) => originMap.get(name)!
    );

    console.log(`   ✓ 找到/插入 ${origins.length} 个产地`);

    // 6. 插入批次（查询已存在的，只插入不存在的）
    console.log("6. 插入批次...");
    const queryBatches = `
      query QueryBatches($farmerIds: [bigint!]!) {
        batches(where: { farmer_farmers: { _in: $farmerIds } }, limit: 10) {
          id
          farmer_farmers
          image_url
        }
      }
    `;

    const existingBatchesResult = await client.execute<{ batches: any[] }>({
      query: queryBatches,
      variables: {
        farmerIds: [farmer1Record.id, farmer2Record.id],
      },
    });

    let batches = existingBatchesResult.batches || [];

    // 如果批次少于5个，则插入新的批次
    if (batches.length < 5) {
      const insertBatches = `
        mutation InsertBatches($objects: [batches_insert_input!]!) {
          insert_batches(objects: $objects) {
            returning {
              id
              farmer_farmers
              image_url
            }
          }
        }
      `;

      const needCount = 5 - batches.length;
      const newBatches = [];
      for (let i = 0; i < needCount; i++) {
        newBatches.push({
          farmer_farmers: i % 2 === 0 ? farmer1Record.id : farmer2Record.id,
          image_url: `https://via.placeholder.com/400x300?text=批次${batches.length + i + 1}`,
        });
      }

      const batchesResult = await client.execute({
        query: insertBatches,
        variables: {
          objects: newBatches,
        },
      });

      batches = [...batches, ...(batchesResult.insert_batches?.returning || [])];
    }

    // 确保至少有5个批次
    batches = batches.slice(0, 5);
    console.log(`   ✓ 找到/插入 ${batches.length} 个批次`);

    // 7. 插入批次媒体文件
    console.log("7. 插入批次媒体文件...");
    const insertBatchMediaFiles = `
      mutation InsertBatchMediaFiles($objects: [batch_media_files_insert_input!]!) {
        insert_batch_media_files(objects: $objects) {
          returning {
            id
          }
        }
      }
    `;

    await client.execute({
      query: insertBatchMediaFiles,
      variables: {
        objects: [
          {
            batch_batches: batches[0].id,
            file_type: "video",
            file_url: "https://via.placeholder.com/800x600?text=采摘视频",
            media_category: "picking",
          },
          {
            batch_batches: batches[0].id,
            file_type: "video",
            file_url: "https://via.placeholder.com/800x600?text=打包视频",
            media_category: "packing",
          },
          {
            batch_batches: batches[0].id,
            file_type: "video",
            file_url: "https://via.placeholder.com/800x600?text=装车视频",
            media_category: "loading",
          },
          {
            batch_batches: batches[0].id,
            file_type: "video",
            file_url: "https://via.placeholder.com/800x600?text=发车视频",
            media_category: "departure",
          },
        ],
      },
    });
    console.log("   ✓ 插入批次媒体文件");

    // 7. 插入产品（每个批次对应一个产品，使用 upsert）
    console.log("7. 插入产品...");
    // 查询已存在的产品
    const queryProducts = `
      query QueryProducts($batchIds: [bigint!]!) {
        products(where: { batch_batches: { _in: $batchIds } }) {
          id
          batch_batches
          name
          unit_price
          unit_stock
        }
      }
    `;

    const existingProductsResult = await client.execute<{ products: any[] }>({
      query: queryProducts,
      variables: {
        batchIds: batches.map((b) => b.id),
      },
    });

    let products = existingProductsResult.products || [];
    const existingBatchIds = new Set(products.map((p) => p.batch_batches));

    // 为没有产品的批次创建产品
    const productsToInsert = batches
      .filter((b) => !existingBatchIds.has(b.id))
      .slice(0, 5)
      .map((batch, index) => ({
        batch_batches: batch.id,
        category_categories: categories[index]?.id,
        origin_origins: origins[index]?.id,
        name: ["烟台红富士苹果", "海南香蕉", "阿克苏冰糖心橙", "智利进口葡萄", "新西兰草莓"][
          index
        ],
        image_url: `https://via.placeholder.com/400x400?text=${["苹果", "香蕉", "橙子", "葡萄", "草莓"][index]}`,
        unit_price: [25.8, 12.5, 18.9, 35.0, 42.8][index],
        unit_stock: [100, 80, 60, 50, 40][index],
        unit: ["斤", "斤", "斤", "箱", "盒"][index],
        sales: [50, 30, 20, 15, 10][index],
      }));

    if (productsToInsert.length > 0) {
      const insertProducts = `
        mutation InsertProducts($objects: [products_insert_input!]!) {
          insert_products(
            objects: $objects
            on_conflict: {
              constraint: products_batch_batches_key
              update_columns: [name, unit_price, unit_stock, unit, sales, image_url]
            }
          ) {
            returning {
              id
              name
              unit_price
              unit_stock
            }
          }
        }
      `;

      const productsResult = await client.execute({
        query: insertProducts,
        variables: {
          objects: productsToInsert,
        },
      });

      products = [...products, ...(productsResult.insert_products?.returning || [])];
    }

    console.log(`   ✓ 找到/插入 ${products.length} 个产品`);

    // 8. 插入购物车（使用 upsert，避免重复）
    console.log("8. 插入购物车...");
    const insertCarts = `
      mutation InsertCarts($objects: [carts_insert_input!]!) {
        insert_carts(
          objects: $objects
          on_conflict: {
            constraint: carts_user_users_product_products_key
            update_columns: [quantity, is_selected]
          }
        ) {
          returning {
            id
          }
        }
      }
    `;

    if (products.length >= 3 && customer1 && customer2) {
      try {
        await client.execute({
          query: insertCarts,
          variables: {
            objects: [
              {
                user_users: customer1.id,
                product_products: products[0].id,
                quantity: 3,
                is_selected: true,
              },
              {
                user_users: customer1.id,
                product_products: products[1].id,
                quantity: 2,
                is_selected: true,
              },
              {
                user_users: customer2.id,
                product_products: products[2].id,
                quantity: 1,
                is_selected: false,
              },
            ],
          },
        });
        console.log("   ✓ 插入/更新购物车数据");
      } catch (error: any) {
        console.log("   ⚠ 购物车数据可能已存在，跳过");
      }
    } else {
      console.log("   ⚠ 产品或用户不足，跳过购物车数据");
    }

    console.log("\n✅ 假数据填充完成！");
    console.log("\n数据概览：");
    console.log(`- 用户: ${users.length} 个`);
    console.log(`- 果农: ${farmers.length} 个`);
    console.log(`- 分类: ${categories.length} 个`);
    console.log(`- 产地: ${origins.length} 个`);
    console.log(`- 批次: ${batches.length} 个`);
    console.log(`- 产品: ${products.length} 个`);
    console.log("\n测试账号：");
    console.log(`- 运营负责人: ${operatorUser.phone} (${operatorUser.nickname})`);
    console.log(`- 果农: ${farmer1.phone} (${farmer1.nickname})`);
    console.log(`- 普通用户: ${customer1.phone} (${customer1.nickname})`);
  } catch (error: any) {
    console.error("\n❌ 填充数据失败:", error.message);
    if (error.response) {
      console.error("错误详情:", JSON.stringify(error.response, null, 2));
    }
    process.exit(1);
  }
}

// 执行
seed();
