import React from 'react';

export default function LoginFooter() {
  return (
    <>
      {/* 회원가입 링크 */}
      <div className="text-center mt-8">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
            Sign up for free
          </a>
        </p>
      </div>

      {/* 푸터 */}
      <div className="text-center mt-8 text-sm text-gray-500">
        <p>By signing in, you agree to our</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a href="#" className="hover:text-gray-700">
            Terms of Service
          </a>
          <span>•</span>
          <a href="#" className="hover:text-gray-700">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}

