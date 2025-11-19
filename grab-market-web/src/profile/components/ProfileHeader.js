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
          className="btn-back"
        >
          ← Back to Home
        </button>
      </div>
    </header>
  );
}

