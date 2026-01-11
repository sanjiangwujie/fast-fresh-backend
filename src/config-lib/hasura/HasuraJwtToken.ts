import jwt, { SignOptions, VerifyOptions, JwtPayload } from 'jsonwebtoken';
import { hasuraJwtTokenConfig } from './config';

/**
 * Hasura JWT Token 相关 claims 类型
 */
export interface HasuraClaims {
  'x-hasura-allowed-roles': string[];
  'x-hasura-default-role': string;
  'x-hasura-user-id': string;
  [key: `x-hasura-${string}`]: any;
}

export interface HasuraJwtPayload extends JwtPayload {
  'https://hasura.io/jwt/claims': HasuraClaims;
  userId: string;
  [key: string]: any;
}

export interface HasuraJwtTokenConfig {
  secret: string;
  expiresIn?: string | number;
  defaultRole?: string;
  allowedRoles?: string[];
  customClaims?: Record<string, any>;
}

export interface GenerateTokenParams {
  userId: string | number;
  allowedRoles?: string[];
  defaultRole?: string;
  customClaims?: Record<string, any>;
  expiresIn?: string | number;
  secret?: string;
}

export class HasuraJwtToken {
  /**
   * 生成 Hasura JWT Token
   * @param params 生成参数，userId 必填，其他可选，未传则自动采用 config 默认
   * @returns JWT 字符串
   */
  static generateToken(params: GenerateTokenParams): string {
    const {
      userId,
      allowedRoles,
      defaultRole,
      customClaims,
      expiresIn,
      secret,
    } = params;
    if (!userId) {
      throw new Error('userId is required');
    }

    // 合并 claims，业务传入优先
    const claims: HasuraClaims = {
      'x-hasura-allowed-roles': allowedRoles || hasuraJwtTokenConfig.allowedRoles || ['user'],
      'x-hasura-default-role': defaultRole || hasuraJwtTokenConfig.defaultRole || 'user',
      'x-hasura-user-id': String(userId),
      ...((hasuraJwtTokenConfig.customClaims as Record<string, any>) || {}),
      ...(customClaims || {}),
    };

    const payload: HasuraJwtPayload = {
      userId: String(userId),
      'https://hasura.io/jwt/claims': claims,
    };
    const realSecret = secret || hasuraJwtTokenConfig.secret;
    const realExpiresIn = expiresIn || hasuraJwtTokenConfig.expiresIn || '7d';
    const options: SignOptions = { expiresIn: realExpiresIn as any, algorithm: 'HS256' };
    return jwt.sign(payload, realSecret, options);
  }

  /**
   * 校验并解密 Hasura JWT Token
   * @param token JWT 字符串
   * @param secret 密钥（可选，默认用config）
   * @returns 解密后的 payload
   * @throws 校验失败会抛出异常
   */
  static verifyToken(token: string, secret?: string): HasuraJwtPayload {
    const realSecret = secret || hasuraJwtTokenConfig.secret;
    const options: VerifyOptions = { algorithms: ['HS256'] };
    return jwt.verify(token, realSecret, options) as HasuraJwtPayload;
  }
}

// 用法示例：
// const token = HasuraJwtToken.generateToken({ userId: '123' });
// const token2 = HasuraJwtToken.generateToken({ userId: '123', allowedRoles: ['user', 'admin'], customClaims: { 'x-hasura-tenant-id': 'abc' } });
// const payload = HasuraJwtToken.verifyToken(token); 
// console.log(payload); // { userId: '123', 'https://hasura.io/jwt/claims': { 'x-hasura-allowed-roles': ['user'], 'x-hasura-default-role': 'user', 'x-hasura-user-id': '123' } }