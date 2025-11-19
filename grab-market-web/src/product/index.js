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
    setLoading(true);
    axios
      .get(`${API_URL}/api/products/${id}`)
      .then((result) => {
        const product = result.data?.product;
        
        if (!product) {
          console.error('Product not found');
          setDeveloper(null);
          setLoading(false);
          return;
        }
        
        const stats = result.data?.stats || {};
        const tags = result.data?.tags || [];
        console.log('Product data:', product); // 디버깅용
        console.log('Stats data:', stats); // 디버깅용
        console.log('Tags data:', tags); // 디버깅용
        console.log('Full API response:', result.data); // 디버깅용
        
        // 다운로드 수 포맷팅
        const formatDownloads = (count) => {
          if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}k`;
          }
          return count.toString();
        };

        // API 응답을 developer 형식으로 변환
        setDeveloper({
          id: product.id,
          name: product.name,
          username: product.name.toLowerCase().replace(/\s+/g, '_'),
          avatar: product.name.substring(0, 2),
          rank: 1, // 랭킹은 별도로 계산 필요
          skill: stats.teamwork !== undefined && stats.stability !== undefined && stats.speed !== undefined && stats.creativity !== undefined && stats.productivity !== undefined && stats.maintainability !== undefined
            ? Math.round((stats.teamwork + stats.stability + stats.speed + stats.creativity + stats.productivity + stats.maintainability) / 6)
            : 95,
          price: product.price,
          imageUrl: product.imageUrl,
          downloads: formatDownloads(product.download_count || 0),
          likes: 0, // API에 없음
          rating: parseFloat(product.rating_average || 0).toFixed(1),
          reviewCount: product.rating_count || 0,
          category: product.category_name || 'NLP',
          tags: tags.map(tag => tag.name || tag),
          location: 'San Francisco, CA', // API에 없음
          joined: product.createdAt ? new Date(product.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'January 2023',
          responseTime: '< 2 hours', // API에 없음
          completionRate: '99%', // API에 없음
          bio: product.description || 'Specialized in building production-ready AI systems.',
          hexagonStats: stats.teamwork !== undefined ? [
            { stat: 'Teamwork', value: stats.teamwork },
            { stat: 'Stability', value: stats.stability },
            { stat: 'Speed', value: stats.speed },
            { stat: 'Creativity', value: stats.creativity },
            { stat: 'Productivity', value: stats.productivity },
            { stat: 'Maintainability', value: stats.maintainability }
          ] : [
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
        console.error('Error response:', error.response); // 디버깅용
        console.error('Error message:', error.message); // 디버깅용
        console.error('API URL:', `${API_URL}/api/products/${id}`); // 디버깅용
        
        // 에러 응답이 있는 경우 상세 정보 출력
        if (error.response) {
          const status = error.response.status;
          const errorData = error.response.data;
          console.error('Status:', status);
          console.error('Error Data:', errorData);
          
          // SQL 에러인 경우
          if (errorData?.sql || errorData?.sqlMessage) {
            console.error('SQL Error:', errorData.sqlMessage);
            console.error('SQL Query:', errorData.sql);
          }
        }
        
        setDeveloper(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (!developer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-xl text-gray-600 mb-4">商品が見つかりませんでした</div>
          <div className="text-gray-500 mb-2">商品ID: {id}</div>
          <div className="text-sm text-gray-400 mb-4">
            API: {API_URL}/api/products/{id}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 text-left">
            <div className="text-sm text-red-800 font-semibold mb-2">エラー情報:</div>
            <div className="text-xs text-red-600">
              サーバーエラーが発生しました。データベースの問題の可能性があります。
              <br />
              ブラウザのコンソールで詳細を確認してください。
            </div>
          </div>
          <div className="mt-4">
            <a href="/" className="text-blue-600 hover:underline">
              メインページに戻る
            </a>
          </div>
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