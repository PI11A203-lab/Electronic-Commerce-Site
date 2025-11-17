import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';
import LoginFooter from './components/LoginFooter';
import { validateLogin } from './mockData';
import './index.css';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async ({ email, password, rememberMe }) => {
    setIsLoading(true);

    // 약간의 지연을 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 500));

    try {
      // Mock 데이터 검증
      const result = validateLogin(email, password);
      
      if (result.success) {
        // 토큰 저장
        const storage = rememberMe ? localStorage : sessionStorage;
        storage.setItem('token', result.token);
        storage.setItem('user', JSON.stringify(result.user));

        message.success('로그인에 성공했습니다.');
        history.push('/');
      } else {
        message.error(result.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-page-content">
        <LoginHeader />
        <div className="login-form-container">
          <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
          <LoginFooter />
        </div>
      </div>
    </div>
  );
}

