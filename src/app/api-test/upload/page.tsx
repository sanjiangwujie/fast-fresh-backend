'use client';

import { useState, useRef } from 'react';

interface UploadResult {
  success: boolean;
  message: string;
  data?: {
    path: string;
    type: string;
    url?: string;
  };
}



export default function UploadTestPage() {
  const [uploading, setUploading] = useState(false);
  const [results, setResults] = useState<UploadResult[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadType, setUploadType] = useState<'binary' | 'form'>('form');

  // 处理文件选择
  const handleFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    
    const fileArray = Array.from(files);
    handleUpload(fileArray);
  };

  // 处理拖拽
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files);
    }
  };

  // 上传文件
  const handleUpload = async (files: File[]) => {
    setUploading(true);
    const newResults: UploadResult[] = [];

    try {
      if (uploadType === 'binary') {
        // 二进制上传
        for (const file of files) {
          const result = await uploadBinary(file);
          newResults.push(result);
        }
      } else {
        // 表单上传
        const result = await uploadForm(files);
        if (Array.isArray(result.data)) {
          newResults.push(...result.data.map(item => ({ ...result, data: item })));
        } else {
          newResults.push(result);
        }
      }
    } catch (error) {
      newResults.push({
        success: false,
        message: error instanceof Error ? error.message : '上传失败'
      });
    }

    setResults(prev => [...prev, ...newResults]);
    setUploading(false);
  };

  // 二进制上传
  const uploadBinary = async (file: File): Promise<UploadResult> => {
    const response = await fetch('/api/upload/binary', {
      method: 'POST',
      headers: {
        'x-filename': encodeURIComponent(file.name),
      },
      body: file,
    });

    const result = await response.json();
    return result;
  };

  // 表单上传
  const uploadForm = async (files: File[]): Promise<UploadResult> => {
    const formData = new FormData();
    files.forEach(file => {
      formData.append('file', file);
    });

    const response = await fetch('/api/upload/form', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    return result;
  };

  // 清除结果
  const clearResults = () => {
    setResults([]);
  };

  // 下载文件
  const downloadFile = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">文件上传测试界面</h1>
          
          {/* 上传类型选择 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              上传方式
            </label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="form"
                  checked={uploadType === 'form'}
                  onChange={(e) => setUploadType(e.target.value as 'form' | 'binary')}
                  className="mr-2"
                />
                表单上传 (FormData)
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="binary"
                  checked={uploadType === 'binary'}
                  onChange={(e) => setUploadType(e.target.value as 'form' | 'binary')}
                  className="mr-2"
                />
                二进制上传 (Binary)
              </label>
            </div>
          </div>

          {/* 文件上传区域 */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <div className="space-y-4">
              <div className="text-gray-600">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  拖拽文件到这里，或
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-blue-600 hover:text-blue-500 ml-1"
                    disabled={uploading}
                  >
                    点击选择文件
                  </button>
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  支持单个或多个文件上传
                </p>
              </div>
            </div>
          </div>

          {/* 隐藏的文件输入 */}
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={(e) => handleFileSelect(e.target.files)}
            className="hidden"
            disabled={uploading}
          />

          {/* 上传状态 */}
          {uploading && (
            <div className="mt-4 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2 text-gray-600">上传中...</span>
            </div>
          )}

          {/* 操作按钮 */}
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              选择文件
            </button>
            <button
              onClick={clearResults}
              disabled={results.length === 0}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              清除结果
            </button>
          </div>

          {/* 上传结果 */}
          {results.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">上传结果</h2>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border ${
                      result.success
                        ? 'bg-green-50 border-green-200'
                        : 'bg-red-50 border-red-200'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              result.success
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {result.success ? '成功' : '失败'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {result.message}
                        </p>
                        {result.data && (
                          <div className="space-y-2">
                            <div className="text-sm">
                              <span className="font-medium">文件路径:</span>{' '}
                              <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                                {result.data.path}
                              </code>
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">文件类型:</span>{' '}
                              <span className="text-gray-600">{result.data.type}</span>
                            </div>
                            {result.data.url && (
                              <div className="text-sm">
                                <span className="font-medium">访问链接:</span>{' '}
                                <a
                                  href={result.data.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 break-all"
                                >
                                  {result.data.url}
                                </a>
                              </div>
                            )}
                            {result.data.url && (
                              <div className="flex space-x-2 mt-2">
                                <button
                                  onClick={() => window.open(result.data!.url, '_blank')}
                                  className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                                >
                                  预览
                                </button>
                                <button
                                  onClick={() => downloadFile(result.data!.url!, result.data!.path.split('/').pop() || 'file')}
                                  className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-700"
                                >
                                  下载
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 使用说明 */}
          <div className="mt-8 bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">使用说明</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p>• <strong>表单上传:</strong> 使用 FormData 格式，支持多文件上传</p>
              <p>• <strong>二进制上传:</strong> 直接上传文件二进制数据，通过 header 传递文件名</p>
              <p>• 支持拖拽上传和点击选择文件</p>
              <p>• 上传成功后可以预览和下载文件</p>
              <p>• 确保已正确配置七牛云环境变量</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
