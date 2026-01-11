import type { CacheOptions } from "./cache-store";

export const cacheOptionsConfig: CacheOptions = {
  duration: 1000 * 60 * 5,
  useCache: true,
  forceRefresh: false,
};