# graphql-ormify-client 使用说明

一个强大的 GraphQL 客户端库，支持类型安全、灵活查询构建、跨平台（微信小程序/Web/Node.js），适合 Hasura 等主流 GraphQL 服务。

---

## 1. 安装

```bash
npm install graphql-ormify-client
# 或
yarn add graphql-ormify-client
# 或
pnpm add graphql-ormify-client
```

---

## 2. 基本配置

```ts
import { GraphQLClient, HasuraGraphqlClient } from "graphql-ormify-client";

const client = new GraphQLClient({
  endpoint: "https://api.example.com/graphql",
  debug: true,
});

const hasuraClient = new HasuraGraphqlClient({
  endpoint: "https://your-hasura-endpoint.com/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "your-secret",
  },
});
```

---

## 3. GraphQLClient 方法示例

### 3.1 query<T>

执行通用 GraphQL 查询。

```ts
const result = await client.query({
  operationName: "GetUser",
  fields: [
    {
      name: "users",
      args: { where: { id: { _eq: () => "$id" } } },
      fields: [
        "id",
        "nickname",
        "avatar_url",
        {
          name: "user_posts",
          alias: "posts",
          fields: "id title content",
        },
      ],
    },
  ],
  variableDefinitions: { $id: "ID!" },
  variables: { id: "123" },
});
```

### 3.2 mutate<T>

执行通用 GraphQL 变更（mutation）。

```ts
const result = await client.mutate({
  operationName: "UpdateUser",
  fields: [
    {
      name: "update_users_by_pk",
      args: {
        pk_columns: { id: () => "$id" },
        _set: { nickname: () => "$nickname" },
      },
      fields: ["id", "nickname"],
    },
  ],
  variableDefinitions: { $id: "ID!", $nickname: "String!" },
  variables: { id: "123", nickname: "新昵称" },
});
```

### 3.3 execute<T>

执行原始 GraphQL 查询字符串。

```ts
const query = `query { users { id name } }`;
const data = await client.execute({ query });
```

### 3.4 request<T>

通用 HTTP 请求（可用于自定义请求）。

```ts
const res = await client.request({
  method: "POST",
  url: "/graphql",
  data: { query: "{ users { id } }" },
});
```

---

## 4. HasuraGraphqlClient 方法示例

### 4.1 data_by_pk<T>

根据主键获取单条数据。

```ts
const user = await hasuraClient.data_by_pk<User>({
  table: "users",
  args: { id: "123" },
  data_fields: ["id", "name", "email"],
});
```

### 4.2 datas<T>

条件查询多条数据。

```ts
const users = await hasuraClient.datas<User>({
  table: "users",
  args: {
    where: { age: { _gte: 18 } },
    order_by: { created_at: () => "desc" },
    limit: 10,
  },
  datas_fields: ["id", "name", "email", "age"],
});
```

### 4.3 data<T>

根据条件获取单条数据（返回第一条匹配记录）。

```ts
const user = await hasuraClient.data<User>({
  table: "users",
  args: { where: { email: { _eq: "test@example.com" } } },
  data_fields: ["id", "name", "email"],
});
```

### 4.4 insert_data_one<T>

插入单条数据。

```ts
const newUser = await hasuraClient.insert_data_one<User>({
  table: "users",
  args:{
    object: { name: "张三", email: "test@example.com" },
  },
  data_fields: ["id", "name", "email"],
});
```

### 4.5 insert_datas<T>

批量插入数据。

```ts
const newUsers = await hasuraClient.insert_datas<User>({
  table: "users",
  args:{objects: [{ name: "A" }, { name: "B" }]},
  datas_fields: ["id", "name"],
});
```

### 4.6 update_data_by_pk<T>

根据主键更新数据。

```ts
const updated = await hasuraClient.update_data_by_pk<User>({
  table: "users",
  args: {
    pk_columns: { id: "123" },
    _set: { name: "新名字" },
  },
  data_fields: ["id", "name"],
});
```

### 4.7 update_datas<T>

条件批量更新。

```ts
const updatedList = await hasuraClient.update_datas<User>({
  table: "users",
  args: {
    where: { age: { _lt: 18 } }
      _set: { status: "未成年" },
    },
  datas_fields: ["id", "name", "status"],
});
```

### 4.8 delete_data_by_pk<T>

根据主键删除。

```ts
const deleted = await hasuraClient.delete_data_by_pk<User>({
  table: "users",
  args:{
    pk_columns: { id: "123" },
  },
  data_fields: ["id", "name"],
});
```

### 4.9 delete_datas<T>

条件批量删除。

```ts
const deletedList = await hasuraClient.delete_datas<User>({
  table: "users",
  args: { where: { status: { _eq: "未激活" } } },
  datas_fields: ["id", "name"],
});
```

### 4.10 find<T, TAggregate>

分页与聚合查询。

```ts
const { list, aggregate } = await hasuraClient.find<User, any>({
  table: "users",
  page:1,
  pageSize:10,
  args: {
    where: { status: { _eq: "激活" } },
  },
  datas_fields: ["id", "name"],
  aggregate_fields: ["count"],
});
```

---

## 5. 其它特性

- 类型安全：所有方法支持 TypeScript 泛型，自动类型推断。
- 请求监控：支持 debug、请求拦截、生命周期监听。
- 跨平台：自动适配微信小程序（wx.request）、Web/Node（fetch）。
- 动态认证：支持运行时动态设置 header/token。
- 错误处理：所有请求均可捕获和处理异常。

---

## 6. 高级用法示例

### 6.1 多层嵌套查询（含嵌套条件与聚合）

```ts
const result = await client.query({
  operationName: "UserWithPostsAndComments",
  fields: [
    {
      name: "users",
      args: { where: { id: { _eq: () => "$userId" } } },
      fields: [
        "id",
        "nickname",
        {
          name: "posts",
          args: { where: { status: { _eq: "published" } } },
          fields: [
            "id",
            "title",
            {
              name: "comments",
              args: { where: { is_deleted: { _eq: false } } },
              fields: ["id", "content", "created_at"],
            },
            // 聚合子表数量
            {
              name: "comments_aggregate",
              fields: [{ name: "aggregate", fields: ["count"] }],
            },
          ],
        },
      ],
    },
  ],
  variableDefinitions: { $userId: "ID!" },
  variables: { userId: "123" },
});
```

### 6.2 批量执行多个不同表/不同类型的 GraphQL 操作

> 可通过 mutation 语法一次执行多个操作，或用 client.mutate 传递多个字段。

```ts
const result = await client.mutate({
  operationName: "BatchUpdate",
  fields: [
    // 更新 users 表
    {
      name: "update_users",
      args: {
        where: { status: { _eq: "inactive" } },
        _set: { status: "active" },
      },
      fields: ["affected_rows"],
    },
    // 更新 posts 表
    {
      name: "update_posts",
      args: {
        where: { is_deleted: { _eq: false } },
        _set: { reviewed: true },
      },
      fields: ["affected_rows"],
    },
    // 插入一条日志
    {
      name: "insert_logs_one",
      args: {
        object: { message: "批量操作完成", type: "batch" },
      },
      fields: ["id", "created_at"],
    },
  ],
});
```

> 也可用事务支持的后端（如 Hasura Action/自定义 resolver）实现更复杂的批量/事务操作。

---

## 7. 参考文档

- 更多用法和高级特性请参考 [npm 官方文档](https://www.npmjs.com/package/graphql-ormify-client) 或项目内 examples 目录。
