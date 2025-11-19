import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ProductHeader() {
  const history = useHistory();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">🤖</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AIDE Market
            </span>
          </h1>
          <button 
            onClick={() => history.push('/')}
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </header>
  );
}

