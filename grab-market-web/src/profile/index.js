import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProfileHero from './components/ProfileHero';
import TabNavigation from './components/TabNavigation';
import PurchasesTab from './components/PurchasesTab';
import ReviewsTab from './components/ReviewsTab';
import TeamsTab from './components/TeamsTab';
import FavoritesTab from './components/FavoritesTab';
import { user, purchases, reviews, teams, favorites } from './mockData';
import './index.css';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('purchases');

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