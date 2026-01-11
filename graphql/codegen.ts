import graphqlOrmfyClientConfig from "../goc.config";

const endpoint = graphqlOrmfyClientConfig.endpoint;
const headers = graphqlOrmfyClientConfig.headers || {};

const defaultConfig = {
  schema: [
    {
      [endpoint]: {
        headers,
      },
    },
  ],
  documents: [],
  generates: {
    "./graphql/schema.graphql": {
      plugins: ["schema-ast"],
    },
    // 如需生成 types:
    "./src/types/graphql.ts": {
      plugins: ["typescript"],
    },
  },
};

export default defaultConfig;
