import { HasuraGraphqlClient } from "graphql-ormify-client";
import {
  graphqlOrmifyClientConfig,
  graphqlOrmifyClientRequestListener,
} from "./config";

// 单例模式：避免重复实例化
let clientInstance: HasuraGraphqlClient | null = null;

// 初始化函数
function initializeHasuraClient(): HasuraGraphqlClient {
  if (clientInstance) {
    return clientInstance; // 如果已存在，直接返回
  }

  // 创建新实例
  clientInstance = new HasuraGraphqlClient(graphqlOrmifyClientConfig);

  // 触发监听
  clientInstance.addListener(graphqlOrmifyClientRequestListener);

  // 挂载到全局对象（避免重复挂载）
  if (typeof window !== "undefined" && !(window as unknown as { hasuraClient: HasuraGraphqlClient }).hasuraClient) {
    (window as unknown as { hasuraClient: HasuraGraphqlClient }).hasuraClient = clientInstance;
  }

  if (typeof globalThis !== "undefined" && !(globalThis as unknown as { hasuraClient: HasuraGraphqlClient }).hasuraClient) {
    (globalThis as unknown as { hasuraClient: HasuraGraphqlClient }).hasuraClient = clientInstance;
  }

  return clientInstance;
}

// 获取实例（懒加载）
export function getHasuraClient(): HasuraGraphqlClient {
  return initializeHasuraClient();
}

// 导出实例（兼容原有代码）
export const hasuraGraphqlClient = initializeHasuraClient();
export default hasuraGraphqlClient;
