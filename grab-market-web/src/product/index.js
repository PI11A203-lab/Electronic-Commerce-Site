import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductHeader from './components/ProductHeader';
import ProfileHeader from './components/ProfileHeader';
import TabNavigation from './components/TabNavigation';
import PriceSidebar from './components/PriceSidebar';
import TrustBadges from './components/TrustBadges';
import { API_URL } from '../config/constants';
import "./index.css";

export default function ProductPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);
  const [developer, setDeveloper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((result) => {
        const product = result.data.product;
        // API 응답을 developer 형식으로 변환
        setDeveloper({
          id: product.id,
          name: product.name,
          username: product.name.toLowerCase().replace(/\s+/g, '_'),
          avatar: product.name.substring(0, 2),
          rank: 1,
          skill: 95,
          price: product.price,
          downloads: '156k',
          likes: 3421,
          rating: 4.9,
          reviewCount: 1234,
          category: 'NLP',
          tags: ['AI/ML', 'Expert'],
          location: 'San Francisco, CA',
          joined: 'January 2023',
          responseTime: '< 2 hours',
          completionRate: '99%',
          bio: product.description || 'Specialized in building production-ready AI systems.',
          hexagonStats: [
            { stat: 'Technical', value: 98 },
            { stat: 'Communication', value: 95 },
            { stat: 'Creativity', value: 92 },
            { stat: 'Speed', value: 96 },
            { stat: 'Reliability', value: 99 },
            { stat: 'Innovation', value: 94 }
          ],
          projects: [],
          reviews: []
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error('エラー発生 : ', error);
        setLoading(false);
      });
  }, [id]);

  if (loading || !developer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ProductHeader />

      <main className="max-w-[1400px] mx-auto px-8 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* 메인 컨텐츠 */}
          <div className="col-span-2">
            <ProfileHeader 
              developer={developer} 
              isLiked={isLiked} 
              onLikeToggle={() => setIsLiked(!isLiked)} 
            />
            <TabNavigation 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
              developer={developer} 
            />
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            <PriceSidebar developer={developer} />
            <TrustBadges />
          </div>
        </div>
      </main>
    </div>
  );
}
