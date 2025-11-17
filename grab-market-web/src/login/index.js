import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';
import { API_URL } from '../config/constants';
import LoginHeader from './components/LoginHeader';
import LoginForm from './components/LoginForm';
import SocialLogin from './components/SocialLogin';
import LoginFooter from './components/LoginFooter';
import './index.css';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleLogin = async ({ email, password, rememberMe }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      // 로그인 성공 처리
      if (response.data.token) {
        // 토큰 저장
        if (rememberMe) {
          localStorage.setItem('token', response.data.token);
        } else {
          sessionStorage.setItem('token', response.data.token);
        }

        // 사용자 정보 저장 (있는 경우)
        if (response.data.user) {
          const storage = rememberMe ? localStorage : sessionStorage;
          storage.setItem('user', JSON.stringify(response.data.user));
        }

        message.success('로그인에 성공했습니다.');
        history.push('/');
      } else {
        message.success('로그인에 성공했습니다.');
        history.push('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        message.error(
          error.response.data.message || '로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.'
        );
      } else {
        message.error('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
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
          <SocialLogin />
          <LoginFooter />
        </div>
      </div>
    </div>
  );
}

