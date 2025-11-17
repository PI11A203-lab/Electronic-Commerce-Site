import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Search, Filter, Star, TrendingUp, Award } from 'lucide-react';
import { API_URL } from '../config/constants';
import './index.css';

dayjs.extend(relativeTime);

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
      }
    };

    checkLoginStatus();
    // storage 이벤트 리스너 추가 (다른 탭에서 로그인/로그아웃 시 동기화)
    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  const categories = [
    { id: 'all', name: 'All', icon: '🤖', count: 0 },
    { id: 'nlp', name: 'NLP', icon: '💬', count: 0 },
    { id: 'cv', name: 'Computer Vision', icon: '👁️', count: 0 },
    { id: 'audio', name: 'Audio', icon: '🎵', count: 0 },
    { id: 'multimodal', name: 'Multimodal', icon: '🌈', count: 0 },
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
              <a href="#" className="nav-link">Models</a>
              <a href="#" className="nav-link">Teams</a>
              <a href="#" className="nav-link">Leaderboard</a>
              <a href="#" className="nav-link">Pricing</a>
            </nav>
          </div>
          <div className="header-right">
            {user ? (
              <Link to="/profile" className="btn-signup">
                {user.nickname}
              </Link>
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
            Browse {products.length} AI specialists ready to bring your vision to life
          </p>
          
          <div className="search-bar-wrapper">
            <div className="search-bar">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search by skills, category, or expertise..."
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
          <aside className="sidebar">
            <div className="sidebar-content">
              <h3 className="sidebar-title">
                <Filter className="sidebar-icon" />
                Categories
              </h3>
              <div className="category-list">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                  >
                    <div className="category-info">
                      <span className="category-icon">{cat.icon}</span>
                      <span className="category-name">{cat.name}</span>
                    </div>
                    <span className="category-count">{cat.count}</span>
                  </button>
                ))}
              </div>

              <div className="sort-section">
                <h4 className="sort-title">Sort by</h4>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="trending">🔥 Trending</option>
                  <option value="downloads">📥 Most Downloads</option>
                  <option value="rating">⭐ Highest Rated</option>
                  <option value="newest">🆕 Newest</option>
                  <option value="price-low">💰 Price: Low to High</option>
                  <option value="price-high">💎 Price: High to Low</option>
                </select>
              </div>
            </div>
          </aside>

          {/* 메인 콘텐츠 */}
          <main className="main-products">
            {/* Top 3 랭킹 */}
            {topProducts.length > 0 && (
              <div className="ranking-section">
                <div className="ranking-header">
                  <Award className="ranking-icon" />
                  <h3 className="ranking-title">🏆 Top Ranked Developers</h3>
                </div>
                
                <div className="ranking-grid">
                  {topProducts.map((product) => (
                    <Link 
                      key={product.id} 
                      to={`/products/${product.id}`}
                      className="ranking-card"
                    >
                      <div className="rank-badge">
                        #{product.rank}
                      </div>

                      <div className="ranking-avatar">
                        {product.name.substring(0, 2)}
                      </div>

                      <h4 className="ranking-name">{product.name}</h4>
                      
                      <div className="ranking-rating">
                        <div className="rating-stars">
                          <Star className="star-icon" />
                          <span className="rating-value">4.9</span>
                        </div>
                        <span className="rating-count">(1,234 reviews)</span>
                      </div>

                      <div className="ranking-tags">
                        <span className="product-tag">AI/ML</span>
                        <span className="product-tag">Expert</span>
                      </div>

                      <div className="ranking-stats">
                        <div className="stat-item">
                          <TrendingUp className="stat-icon" />
                          <span>12.5k</span>
                        </div>
                        <div className="stat-item">
                          <span>Skill 95%</span>
                        </div>
                      </div>

                      <div className="ranking-footer">
                        <span className="ranking-price">{product.price}원</span>
                        <button className="btn-view">View Profile</button>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* 나머지 제품 목록 */}
            <div className="products-section">
              <h3 className="products-title">All AI Developers</h3>
              <div className="products-grid">
                {regularProducts.map((product) => (
                  <Link 
                    key={product.id} 
                    to={`/products/${product.id}`}
                    className={`product-card ${product.soldout === 1 ? 'soldout' : ''}`}
                  >
                    {product.soldout === 1 && <div className="product-blur" />}
                    
                    <div className="product-header">
                      <div className="product-avatar-small">
                        {product.name.substring(0, 2)}
                      </div>
                      <button className="btn-favorite">
                        <Star className="favorite-icon" />
                      </button>
                    </div>

                    <div className="product-image-wrapper">
                      <img
                        className="product-image"
                        src={`${API_URL}/${product.imageUrl}`}
                        alt={product.name}
                      />
                    </div>

                    <h4 className="product-name">{product.name}</h4>
                    
                    <div className="product-rating-small">
                      <Star className="star-small" />
                      <span className="rating-small">4.7</span>
                      <span className="reviews-small">(234)</span>
                    </div>

                    <div className="product-meta">
                      <div className="meta-item">
                        <TrendingUp className="meta-icon" />
                        <span>8.2k</span>
                      </div>
                      <span className="meta-skill">Skill 88%</span>
                    </div>

                    <div className="product-footer-new">
                      <span className="product-price-new">{product.price}원</span>
                      <button className="btn-view-small">View</button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

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