import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ProfileHeader() {
  const history = useHistory();

  return (
    <header className="profile-header">
      <div className="header-content">
        <h1 className="logo">
          <span className="logo-icon">🤖</span>
          <span className="logo-text">AIDE Market</span>
        </h1>
        <button 
          onClick={() => history.push('/')}
          className="text-gray-700 hover:text-gray-900 font-medium"
        >
          ← Back to Home
        </button>
      </div>
    </header>
  );
}

