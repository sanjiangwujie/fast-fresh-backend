'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getHasuraClient } from '@/config-lib/hasura-graphql-client/hasura-graphql-client';
import type { Users } from '@/types/graphql';

export default function UsersPage() {
  const router = useRouter();
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newUser, setNewUser] = useState({
    nickname: '',
    mobile: '',
    bio: '',
    avatar_url: ''
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const client = getHasuraClient();
        
        // 使用 GraphQL 查询获取用户数据
        const query = `
          query GetUsers($limit: Int, $offset: Int) {
            users(limit: $limit, offset: $offset, order_by: { created_at: desc }) {
              id
              nickname
              mobile
              avatar_url
              bio
              gold_credit
              silver_credit
              member_type_id
              created_at
              updated_at
            }
          }
        `;
        
        const result = await client.execute({
          query,
          variables: {
            limit: 50,
            offset: 0
          }
        });
        
        console.log('GraphQL 查询结果:', result);
        console.log('用户数据:', result.users);
        
        setUsers(result.users || []);
      } catch (err) {
        console.error('获取用户数据失败:', err);
        setError('获取用户数据失败，请稍后重试');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const createUser = async () => {
    if (!newUser.nickname.trim()) {
      alert('昵称不能为空');
      return;
    }

    try {
      const client = getHasuraClient();
      
      const mutation = `
        mutation CreateUser($objects: [users_insert_input!]!) {
          insert_users(objects: $objects) {
            returning {
              id
              nickname
              mobile
              avatar_url
              bio
              gold_credit
              silver_credit
              member_type_id
              created_at
              updated_at
            }
          }
        }
      `;
      
      const result = await client.execute({
        query: mutation,
        variables: {
          objects: [{
            nickname: newUser.nickname,
            mobile: newUser.mobile || null,
            bio: newUser.bio || null,
            avatar_url: newUser.avatar_url || null,
            gold_credit: 0,
            silver_credit: 0,
            member_type_id: 1
          }]
        }
      });
      
      // 刷新用户列表
      const query = `
        query GetUsers($limit: Int, $offset: Int) {
          users(limit: $limit, offset: $offset, order_by: { created_at: desc }) {
            id
            nickname
            mobile
            avatar_url
            bio
            gold_credit
            silver_credit
            member_type_id
            created_at
            updated_at
          }
        }
      `;
      
      const refreshResult = await client.execute({
        query,
        variables: {
          limit: 50,
          offset: 0
        }
      });
      
      setUsers(refreshResult.users || []);
      setShowCreateForm(false);
      setNewUser({ nickname: '', mobile: '', bio: '', avatar_url: '' });
    } catch (err) {
      console.error('创建用户失败:', err);
      alert('创建用户失败，请稍后重试');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatCredit = (credit: any) => {
    return credit ? Number(credit).toLocaleString() : '0';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 页面标题 */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">用户管理</h1>
            <p className="mt-2 text-gray-600">查看和管理所有用户信息</p>
          </div>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            + 添加用户
          </button>
        </div>

        {/* 统计信息 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">👥</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">总用户数</p>
                <p className="text-2xl font-semibold text-gray-900">{users.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">💰</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">总金积分</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {users.reduce((sum, user) => sum + (Number(user.gold_credit) || 0), 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">🪙</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">总银积分</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {users.reduce((sum, user) => sum + (Number(user.silver_credit) || 0), 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">📱</span>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">有手机号用户</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {users.filter(user => user.mobile).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 用户列表 */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">用户列表</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    用户信息
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    联系方式
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    积分信息
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    会员类型
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    注册时间
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    最后更新
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr 
                    key={user.id} 
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => router.push(`/users/${user.id}`)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {user.avatar_url ? (
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={user.avatar_url}
                              alt={user.nickname}
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                              <span className="text-gray-600 text-sm font-medium">
                                {user.nickname?.charAt(0)?.toUpperCase() || '?'}
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.nickname}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {user.id}
                          </div>
                          {user.bio && (
                            <div className="text-xs text-gray-400 mt-1 max-w-xs truncate">
                              {user.bio}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.mobile || '未绑定'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <div className="flex items-center space-x-4">
                          <div>
                            <span className="text-yellow-600 font-medium">金:</span>
                            <span className="ml-1">{formatCredit(user.gold_credit)}</span>
                          </div>
                          <div>
                            <span className="text-gray-600 font-medium">银:</span>
                            <span className="ml-1">{formatCredit(user.silver_credit)}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                        类型 {user.member_type_id}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(user.created_at)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(user.updated_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {users.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">👥</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">暂无用户数据</h3>
              <p className="text-gray-500">系统中还没有用户注册</p>
            </div>
          )}
        </div>

        {/* 创建用户模态框 */}
        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">添加新用户</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    昵称 *
                  </label>
                  <input
                    type="text"
                    value={newUser.nickname}
                    onChange={(e) => setNewUser({ ...newUser, nickname: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="请输入昵称"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    手机号
                  </label>
                  <input
                    type="text"
                    value={newUser.mobile}
                    onChange={(e) => setNewUser({ ...newUser, mobile: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="请输入手机号"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    个人简介
                  </label>
                  <textarea
                    value={newUser.bio}
                    onChange={(e) => setNewUser({ ...newUser, bio: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="请输入个人简介"
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    头像链接
                  </label>
                  <input
                    type="url"
                    value={newUser.avatar_url}
                    onChange={(e) => setNewUser({ ...newUser, avatar_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="请输入头像链接"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
                >
                  取消
                </button>
                <button
                  onClick={createUser}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  创建用户
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
