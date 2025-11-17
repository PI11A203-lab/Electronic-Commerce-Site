import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileHeader from './components/ProfileHeader';
import ProfileHero from './components/ProfileHero';
import TabNavigation from './components/TabNavigation';
import PurchasesTab from './components/PurchasesTab';
import ReviewsTab from './components/ReviewsTab';
import TeamsTab from './components/TeamsTab';
import FavoritesTab from './components/FavoritesTab';
import { API_URL } from '../config/constants';
import './index.css';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('purchases');
  const [user, setUser] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 사용자 정보 가져오기
    const userFromStorage = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (userFromStorage) {
      try {
        const userData = JSON.parse(userFromStorage);
        setUser({
          name: userData.nickname || userData.name || 'User',
          avatar: (userData.nickname || userData.name || 'User').substring(0, 2),
          email: userData.email || 'user@example.com',
          joinDate: 'January 2025',
          tags: ['React', 'Node.js', 'Python', 'AI/ML'],
          github: 'user',
          bio: 'Full-stack developer passionate about AI and web technologies',
          stats: {
            purchases: 0,
            reviews: 0,
            teams: 0,
            favorites: 0
          }
        });
      } catch (e) {
        console.error('Failed to parse user data:', e);
      }
    }

    // 구매 내역 가져오기 (localStorage에서)
    const savedPurchases = localStorage.getItem('purchases');
    if (savedPurchases) {
      try {
        const purchaseIds = JSON.parse(savedPurchases);
        Promise.all(
          purchaseIds.map(id => 
            axios.get(`${API_URL}/products/${id}`)
              .then(res => {
                const product = res.data.product;
                return {
                  id: product.id,
                  name: product.name,
                  category: 'NLP',
                  price: product.price,
                  purchaseDate: new Date().toISOString().split('T')[0],
                  avatar: product.name.substring(0, 2),
                  code: `${product.name.toUpperCase().replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
                };
              })
          )
        ).then(items => {
          setPurchases(items);
          if (user) {
            setUser(prev => ({ ...prev, stats: { ...prev.stats, purchases: items.length } }));
          }
        }).catch(error => {
          console.error('エラー発生 : ', error);
        });
      } catch (e) {
        console.error('Failed to parse purchases data:', e);
      }
    }

    // 찜 목록 가져오기 (localStorage에서)
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      try {
        const favoriteIds = JSON.parse(savedFavorites);
        Promise.all(
          favoriteIds.map(id => 
            axios.get(`${API_URL}/products/${id}`)
              .then(res => {
                const product = res.data.product;
                return {
                  id: product.id,
                  name: product.name,
                  category: 'NLP',
                  price: product.price,
                  rating: 4.7,
                  avatar: product.name.substring(0, 2)
                };
              })
          )
        ).then(items => {
          setFavorites(items);
          if (user) {
            setUser(prev => ({ ...prev, stats: { ...prev.stats, favorites: items.length } }));
          }
        }).catch(error => {
          console.error('エラー発生 : ', error);
        });
      } catch (e) {
        console.error('Failed to parse favorites data:', e);
      }
    }

    // 리뷰와 팀은 빈 배열로 설정 (나중에 API 추가 가능)
    setReviews([]);
    setTeams([]);
    setLoading(false);
  }, []);

  if (loading || !user) {
    return (
      <div className="profile-container">
        <ProfileHeader />
        <main className="profile-main">
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Loading...</div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <ProfileHeader />

      <main className="profile-main">
        <ProfileHero user={user} />

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="tab-content">
          {activeTab === 'purchases' && <PurchasesTab purchases={purchases} />}
          {activeTab === 'reviews' && <ReviewsTab reviews={reviews} />}
          {activeTab === 'teams' && <TeamsTab teams={teams} />}
          {activeTab === 'favorites' && <FavoritesTab favorites={favorites} />}
        </div>
      </main>
    </div>
  );
}