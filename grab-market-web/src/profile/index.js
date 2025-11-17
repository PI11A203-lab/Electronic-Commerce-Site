import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ShoppingBag, Star, Users, Heart, Github, Calendar, Award, TrendingUp } from 'lucide-react';
import './index.css';

export default function UserProfile() {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('purchases');

  // 유저 정보
  const user = {
    name: 'NyaNya',
    avatar: 'NN',
    email: 'nyanyan@example.com',
    joinDate: 'January 2025',
    tags: ['React', 'Node.js', 'Python', 'AI/ML'],
    github: 'nyanyanyan',
    bio: 'Full-stack developer passionate about AI and web technologies',
    stats: {
      purchases: 12,
      reviews: 8,
      teams: 3,
      favorites: 15
    }
  };

  // 구매한 AI
  const purchases = [
    { id: 1, name: 'GPT-Master', category: 'NLP', price: 8900, purchaseDate: '2025-01-15', avatar: 'GM', code: 'GPT-MASTER-X9K2L' },
    { id: 2, name: 'VisionPro', category: 'Computer Vision', price: 7500, purchaseDate: '2025-01-10', avatar: 'VP', code: 'VISION-PRO-M3N7K' },
    { id: 3, name: 'AudioWizard', category: 'Audio', price: 6800, purchaseDate: '2025-01-08', avatar: 'AW', code: 'AUDIO-WIZ-R6T3H' },
  ];

  // 작성한 리뷰
  const reviews = [
    { id: 1, aiName: 'GPT-Master', rating: 5, date: '2025-01-16', comment: 'Absolutely amazing work! The implementation was flawless and well-documented.' },
    { id: 2, aiName: 'VisionPro', rating: 4, date: '2025-01-12', comment: 'Great quality but delivery took longer than expected. Overall satisfied.' },
    { id: 3, aiName: 'AudioWizard', rating: 5, date: '2025-01-09', comment: 'Perfect for our audio processing needs. Highly recommend!' },
  ];

  // 팀 구성
  const teams = [
    { 
      id: 1, 
      name: 'E-commerce Project Team', 
      members: ['GPT-Master', 'VisionPro', 'DataScientist'], 
      createdDate: '2025-01-15',
      synergyScore: 95 
    },
    { 
      id: 2, 
      name: 'Content Creation Squad', 
      members: ['AudioWizard', 'ImageGenius'], 
      createdDate: '2025-01-10',
      synergyScore: 88 
    },
  ];

  // 찜 목록
  const favorites = [
    { id: 4, name: 'DeepChat', category: 'NLP', price: 5200, rating: 4.7, avatar: 'DC' },
    { id: 5, name: 'ImageGenius', category: 'CV', price: 4800, rating: 4.8, avatar: 'IG' },
    { id: 6, name: 'DataScientist', category: 'Tabular', price: 4500, rating: 4.6, avatar: 'DS' },
  ];

  return (
    <div className="profile-container">
      {/* 헤더 */}
      <header className="profile-header">
        <div className="header-content">
          <h1 className="logo">
            <span className="logo-icon">🤖</span>
            <span className="logo-text">AIDE Market</span>
          </h1>
          <button className="btn-back" onClick={() => history.push('/')}>← Back to Home</button>
        </div>
      </header>

      <main className="profile-main">
        {/* 프로필 헤더 카드 */}
        <div className="profile-hero">
          <div className="profile-hero-content">
            <div className="profile-avatar-section">
              <div className="profile-avatar-large">
                {user.avatar}
              </div>
              <div className="profile-info">
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-email">{user.email}</p>
                <div className="profile-tags">
                  {user.tags.map((tag, idx) => (
                    <span key={idx} className="profile-tag">#{tag}</span>
                  ))}
                </div>
                <div className="profile-links">
                  <a 
                    href={`https://github.com/${user.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-github"
                  >
                    <Github className="w-5 h-5" />
                    @{user.github}
                  </a>
                  <div className="profile-join">
                    <Calendar className="w-5 h-5" />
                    Joined {user.joinDate}
                  </div>
                </div>
              </div>
            </div>

            {/* 통계 */}
            <div className="profile-stats">
              <div className="stat-card">
                <ShoppingBag className="stat-icon" />
                <div className="stat-number">{user.stats.purchases}</div>
                <div className="stat-label">Purchases</div>
              </div>
              <div className="stat-card">
                <Star className="stat-icon" />
                <div className="stat-number">{user.stats.reviews}</div>
                <div className="stat-label">Reviews</div>
              </div>
              <div className="stat-card">
                <Users className="stat-icon" />
                <div className="stat-number">{user.stats.teams}</div>
                <div className="stat-label">Teams</div>
              </div>
              <div className="stat-card">
                <Heart className="stat-icon" />
                <div className="stat-number">{user.stats.favorites}</div>
                <div className="stat-label">Favorites</div>
              </div>
            </div>
          </div>
        </div>

        {/* 탭 네비게이션 */}
        <div className="profile-tabs">
          <button
            onClick={() => setActiveTab('purchases')}
            className={`tab-button ${activeTab === 'purchases' ? 'active' : ''}`}
          >
            <ShoppingBag className="tab-icon" />
            Purchased AI
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
          >
            <Star className="tab-icon" />
            My Reviews
          </button>
          <button
            onClick={() => setActiveTab('teams')}
            className={`tab-button ${activeTab === 'teams' ? 'active' : ''}`}
          >
            <Users className="tab-icon" />
            My Teams
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`tab-button ${activeTab === 'favorites' ? 'active' : ''}`}
          >
            <Heart className="tab-icon" />
            Favorites
          </button>
        </div>

        {/* 탭 컨텐츠 */}
        <div className="tab-content">
          {/* 구매한 AI */}
          {activeTab === 'purchases' && (
            <div className="purchases-grid">
              {purchases.map((purchase) => (
                <div key={purchase.id} className="purchase-card">
                  <div className="purchase-header">
                    <div className="purchase-avatar">{purchase.avatar}</div>
                    <div className="purchase-info">
                      <h3 className="purchase-name">{purchase.name}</h3>
                      <p className="purchase-category">{purchase.category}</p>
                    </div>
                  </div>
                  <div className="purchase-code">
                    <span className="code-label">🔑 Activation Code</span>
                    <code className="code-text">{purchase.code}</code>
                  </div>
                  <div className="purchase-footer">
                    <span className="purchase-price">{purchase.price}원</span>
                    <span className="purchase-date">{purchase.purchaseDate}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 리뷰 */}
          {activeTab === 'reviews' && (
            <div className="reviews-list">
              {reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <h3 className="review-ai-name">{review.aiName}</h3>
                    <div className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`review-star ${i < review.rating ? 'filled' : ''}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                  <span className="review-date">{review.date}</span>
                </div>
              ))}
            </div>
          )}

          {/* 팀 */}
          {activeTab === 'teams' && (
            <div className="teams-grid">
              {teams.map((team) => (
                <div key={team.id} className="team-card">
                  <div className="team-header">
                    <Users className="team-icon" />
                    <h3 className="team-name">{team.name}</h3>
                  </div>
                  <div className="team-members">
                    {team.members.map((member, idx) => (
                      <div key={idx} className="team-member-badge">
                        {member}
                      </div>
                    ))}
                  </div>
                  <div className="team-synergy">
                    <Award className="synergy-icon" />
                    <span className="synergy-label">Synergy Score</span>
                    <span className="synergy-score">{team.synergyScore}</span>
                  </div>
                  <div className="team-date">Created: {team.createdDate}</div>
                </div>
              ))}
            </div>
          )}

          {/* 찜 목록 */}
          {activeTab === 'favorites' && (
            <div className="favorites-grid">
              {favorites.map((fav) => (
                <div key={fav.id} className="favorite-card">
                  <div className="favorite-avatar">{fav.avatar}</div>
                  <h3 className="favorite-name">{fav.name}</h3>
                  <p className="favorite-category">{fav.category}</p>
                  <div className="favorite-rating">
                    <Star className="favorite-star" />
                    <span>{fav.rating}</span>
                  </div>
                  <div className="favorite-footer">
                    <span className="favorite-price">{fav.price}원</span>
                    <button className="btn-remove-favorite">
                      <Heart className="w-5 h-5 filled" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}