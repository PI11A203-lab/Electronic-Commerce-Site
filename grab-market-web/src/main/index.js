import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Search, ShoppingCart } from 'lucide-react';
import { API_URL } from '../config/constants';
import LogoutButton from './components/LogoutButton';
import CategorySidebar from './components/CategorySidebar';
import RankingSection from './components/RankingSection';
import ProductList from './components/ProductList';
import './index.css';

function MainPage() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('trending');
  const [user, setUser] = useState(null);

  // 로그인 상태 확인
  useEffect(() => {
    const checkLoginStatus = () => {
      const userFromStorage = localStorage.getItem('user') || sessionStorage.getItem('user');
      if (userFromStorage) {
        try {
          setUser(JSON.parse(userFromStorage));
        } catch (e) {
          console.error('Failed to parse user data:', e);
        }
      } else {
        setUser(null);
      }
    };

    checkLoginStatus();
    // storage 이벤트 리스너 추가 (다른 탭에서 로그인/로그아웃 시 동기화)
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  // 로그아웃 함수
  const handleLogout = () => {
    // localStorage와 sessionStorage 모두에서 사용자 정보 제거
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    
    // 상태 업데이트
    setUser(null);
    
    // 메인 페이지로 리다이렉트 (현재 페이지이므로 새로고침)
    window.location.reload();
  };

  const categories = [
    { id: 'all', name: 'すべて', count: 41 },
    { id: 'fe', name: 'フロントエンド', count: 5 },
    { id: 'be', name: 'バックエンド', count: 6 },
    { id: 'design', name: 'イメージ', count: 6 },
    { id: 'mg', name: '設計・マネジメント', count: 6 },
    { id: 'inf', name: 'インフラ', count: 6 },
    { id: 'sec', name: 'セキュリティ', count: 6 },
  ];

  useEffect(() => {
    axios
      .get(`${API_URL}/products`)
      .then((result) => {
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.error('エラー発生 : ', error);
      });
  }, []);

  // Top 3 제품 (가격 높은 순으로 임시 설정)
  const topProducts = [...products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 3)
    .map((product, index) => ({ ...product, rank: index + 1 }));

  const regularProducts = products.slice(3);

  return (
    <div className="marketplace-container">
      {/* 헤더 */}
      <header className="marketplace-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-section">
              <h1 className="logo">
                <span className="logo-icon">🤖</span>
                <span className="logo-text">AIDE Market</span>
              </h1>
            </div>
            <nav className="main-nav">
              <button className="nav-link" type="button">Models</button>
              <Link to="/team" className="nav-link">Teams</Link>
              <button className="nav-link" type="button">Leaderboard</button>
              <button className="nav-link" type="button">Pricing</button>
            </nav>
          </div>
          <div className="header-right">
            <Link to="/purchase" className="cart-link">
              <ShoppingCart className="cart-icon" />
            </Link>
            {user ? (
              <div className="user-menu">
                <Link to="/profile" className="btn-signup">
                  {user.nickname}
                </Link>
                <LogoutButton onLogout={handleLogout} />
              </div>
            ) : (
              <Link to="/login" className="btn-signup">Sign in</Link>
            )}
          </div>
        </div>
      </header>

      {/* 검색 영역 */}
      <div className="search-section">
        <div className="search-content">
          <h2 className="search-title">Find the Perfect AI Developer</h2>
          <p className="search-subtitle">
          AI開発者 {products.length} 人があなたのビジョンを実現する準備ができています
          </p>
          
          <div className="search-bar-wrapper">
            <div className="search-bar">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="あなたが探しているAIは何ですか？"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <div className="content-wrapper">
          {/* 사이드바 */}
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {/* 메인 콘텐츠 */}
          <main className="main-products">
            {/* Top 3 랭킹 */}
            <RankingSection topProducts={topProducts} />

            {/* 나머지 제품 목록 */}
            <ProductList products={regularProducts} />

            {/* 더보기 버튼 */}
            <div className="load-more">
              <button className="btn-load-more">Load More Developers</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default MainPage;