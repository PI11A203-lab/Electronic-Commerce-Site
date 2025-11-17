import React from 'react';
import { LogOut } from 'lucide-react';
import '../index.css';

const LogoutButton = ({ onLogout }) => {
  return (
    <button onClick={onLogout} className="btn-logout" title="로그아웃">
      <LogOut className="logout-icon" />
    </button>
  );
};

export default LogoutButton;

