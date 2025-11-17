// Mock 사용자 데이터
export const mockUsers = [
  {
    email: 'ellan122316@gmail.com',
    password: 'painter@1223',
    nickname: 'ナナ'
  }
];

// Mock 데이터로 로그인 검증
export const validateLogin = (email, password) => {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );
  
  if (user) {
    return {
      success: true,
      user: {
        email: user.email,
        nickname: user.nickname
      },
      token: 'mock_token_' + Date.now()
    };
  }
  
  return {
    success: false,
    message: 'ログインに失敗しました。 メールアドレスとパスワードの確認をお願いします。'
  };
};

