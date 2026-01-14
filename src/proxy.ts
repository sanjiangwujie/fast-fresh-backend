import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  // 处理 CORS
  const origin = request.headers.get("origin");
  
  // 允许的源（开发环境）
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
  ];

  // 如果是 API 路由，添加 CORS 头
  if (request.nextUrl.pathname.startsWith("/api")) {
    // 处理 OPTIONS 预检请求
    if (request.method === "OPTIONS") {
      const response = new NextResponse(null, { status: 200 });
      
      // 检查 origin 是否在允许列表中
      if (origin && allowedOrigins.includes(origin)) {
        response.headers.set("Access-Control-Allow-Origin", origin);
        response.headers.set("Access-Control-Allow-Credentials", "true");
      } else if (origin) {
        // 如果 origin 不在允许列表中，仍然返回，但不设置 credentials
        response.headers.set("Access-Control-Allow-Origin", origin);
      } else {
        // 如果没有 origin（比如同源请求），允许所有源
        response.headers.set("Access-Control-Allow-Origin", "*");
      }
      
      response.headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      response.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization, X-Requested-With"
      );
      response.headers.set("Access-Control-Max-Age", "86400");
      
      return response;
    }

    // 处理实际请求
    const response = NextResponse.next();
    
    // 检查 origin 是否在允许列表中
    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set("Access-Control-Allow-Origin", origin);
      response.headers.set("Access-Control-Allow-Credentials", "true");
    } else if (origin) {
      // 如果 origin 不在允许列表中，仍然返回，但不设置 credentials
      response.headers.set("Access-Control-Allow-Origin", origin);
    } else {
      // 如果没有 origin（比如同源请求），允许所有源
      response.headers.set("Access-Control-Allow-Origin", "*");
    }
    
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Requested-With"
    );
    response.headers.set("Access-Control-Max-Age", "86400");

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
