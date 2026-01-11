import { HasuraJwtTokenConfig } from "./HasuraJwtToken";

export type { HasuraJwtTokenConfig };

const hasuraJwtTokenConfig: HasuraJwtTokenConfig = {
  secret: process.env.HASURA_JWT_SECRET || "hasura_graphql_jwt_secret_key_for_HS256",
  expiresIn: "7d",
  defaultRole: "user",
  allowedRoles: ["user"],
  customClaims: {},
};

export { hasuraJwtTokenConfig };
