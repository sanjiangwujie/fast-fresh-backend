type CacheEntry<T> = { data: T; timestamp: number };
import { cacheOptionsConfig } from "./config";
const staticCache = new Map<string, CacheEntry<any>>();

/**
 * 字符串哈希函数
 * @param str 字符串
 * @returns 哈希值
 */
function fnv1aHash(str: string): string {
  let hash = 2166136261;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return (hash >>> 0).toString(36);
}
/**
 * 缓存选项
 * @param duration 缓存时长（毫秒）
 * @param useCache 是否使用缓存
 * @param forceRefresh 是否强制刷新（覆盖缓存）
 */
 export interface CacheOptions {
  duration?: number; // 缓存时长（毫秒）
  useCache?: boolean; // 是否使用缓存
  forceRefresh?: boolean; // 是否强制刷新（覆盖缓存）
}

/**
 * 高阶函数：包装异步函数为带缓存的函数
 * @param fn 需要缓存的异步函数
 * @param options 缓存选项
 */
export function cache<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  options: CacheOptions = cacheOptionsConfig
): (...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>> {
  const { duration = 5 * 60 * 1000, useCache = true, forceRefresh = false } = options;
  return async (...args: Parameters<T>) => {
    const rawKey = fn.toString() + JSON.stringify(args);
    const key = fnv1aHash(rawKey);
    if (!useCache) {
      const data = await fn(...args);
      staticCache.set(key, { data, timestamp: Date.now() });
      return data;
    }
    const entry = staticCache.get(key);
    if (!forceRefresh && entry && Date.now() - entry.timestamp < duration) {
      return entry.data;
    }
    const data = await fn(...args);
    staticCache.set(key, { data, timestamp: Date.now() });
    return data;
  };
}

/**
 * 清空全部缓存
 */
export function clearCache() {
  staticCache.clear();
}

/**
 * 缓存管理器
 */
const cacheStore = {
  cache,
  clearCache,
  fnv1aHash,
};
export default cacheStore;