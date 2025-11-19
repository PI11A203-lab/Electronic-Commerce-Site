import React, { useState } from 'react';
import { MailOutlined, LockOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

export default function LoginForm({ onSubmit, isLoading }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password, rememberMe });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 이메일 */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email Address
        </label>
        <div className="relative">
          <MailOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition text-lg"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      {/* 비밀번호 */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <LockOutlined className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition text-lg"
            required
            disabled={isLoading}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            disabled={isLoading}
          >
            {showPassword ? (
              <EyeInvisibleOutlined className="text-lg" />
            ) : (
              <EyeOutlined className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            disabled={isLoading}
          />
          <span className="text-sm text-gray-700">Remember me</span>
        </label>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          Forgot password?
        </a>
      </div>

      {/* 로그인 버튼 */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}

