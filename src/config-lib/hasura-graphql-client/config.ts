import type { GraphQLClientConfig,RequestListener ,RequestLifecycle} from "graphql-ormify-client";
import { hasuraGraphqlClientConfig as config } from "@/project-config";
export const graphqlOrmifyClientConfig: GraphQLClientConfig = {
  endpoint: config.endpoint,
  headers: config.headers,
  debug:false
};  
export const graphqlOrmifyClientRequestListener: RequestListener = {
  onRequest: (info: RequestLifecycle) => {
    console.log("request-start", {id:info?.id,query: info?.config?.data?.query, variables: info?.config?.data?.variables});
  },
  onResponse: (info: RequestLifecycle) => {
    console.log("response-end", {id:info?.id,data: info?.response});
  },
};