import React from 'react';

export default function LoginHeader() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl mb-4 shadow-xl">
        <span className="text-4xl">🤖</span>
      </div>
      <h1 className="text-4xl font-bold mb-2">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          AIDE Market
        </span>
      </h1>
      <p className="text-gray-600 text-lg">Welcome back! Sign in to continue</p>
    </div>
  );
}

