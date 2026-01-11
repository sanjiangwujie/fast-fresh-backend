'use client';

import Link from 'next/link';

export default function ApiTestPage() {
  const testModules = [
    {
      title: '文件上传测试',
      description: '测试七牛云文件上传功能，支持二进制和表单上传',
      href: '/api-test/upload',
      icon: '📁',
      features: ['二进制上传', '表单上传', '多文件上传', '拖拽上传', '预览下载']
    },
    {
      title: '认证测试',
      description: '测试用户认证相关功能',
      href: '/api-test/auth',
      icon: '🔐',
      features: ['手机号登录', '微信登录', 'JWT Token']
    },
    {
      title: 'GraphQL 测试',
      description: '测试 GraphQL 查询和变更操作',
      href: '/api-test/graphql',
      icon: '🔍',
      features: ['数据查询', '数据变更', '类型安全']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">API 测试中心</h1>
          <p className="text-lg text-gray-600">
            测试 Next.js Template 项目的各种 API 功能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testModules.map((module, index) => (
            <Link
              key={index}
              href={module.href}
              className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{module.icon}</span>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {module.title}
                </h2>
              </div>
              
              <p className="text-gray-600 mb-4">
                {module.description}
              </p>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-gray-700">功能特性:</h3>
                <div className="flex flex-wrap gap-2">
                  {module.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-800">
                <span className="text-sm font-medium">开始测试</span>
                <svg
                  className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* 项目信息 */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">项目信息</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <span className="font-medium">技术栈:</span>
              <ul className="mt-1 space-y-1">
                <li>• Next.js 15.3.4 (App Router)</li>
                <li>• TypeScript 5</li>
                <li>• Tailwind CSS 4</li>
                <li>• GraphQL (graphql-ormify-client)</li>
              </ul>
            </div>
            <div>
              <span className="font-medium">集成服务:</span>
              <ul className="mt-1 space-y-1">
                <li>• 七牛云存储</li>
                <li>• 阿里云短信</li>
                <li>• 微信服务</li>
                <li>• JWT 认证</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 快速链接 */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}

