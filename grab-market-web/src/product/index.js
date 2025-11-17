import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductHeader from './components/ProductHeader';
import ProfileHeader from './components/ProfileHeader';
import TabNavigation from './components/TabNavigation';
import PriceSidebar from './components/PriceSidebar';
import TrustBadges from './components/TrustBadges';
import { getDeveloperById } from './mockData';
import "./index.css";

export default function ProductPage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);

  const developer = getDeveloperById(id);

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
