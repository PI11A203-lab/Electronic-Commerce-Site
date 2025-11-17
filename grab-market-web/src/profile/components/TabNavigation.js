import React from 'react';
import { ShoppingBag, Star, Users, Heart } from 'lucide-react';

export default function TabNavigation({ activeTab, onTabChange }) {
  return (
    <div className="profile-tabs">
      <button
        onClick={() => onTabChange('purchases')}
        className={`tab-button ${activeTab === 'purchases' ? 'active' : ''}`}
      >
        <ShoppingBag className="tab-icon" />
        Purchased AI
      </button>
      <button
        onClick={() => onTabChange('reviews')}
        className={`tab-button ${activeTab === 'reviews' ? 'active' : ''}`}
      >
        <Star className="tab-icon" />
        My Reviews
      </button>
      <button
        onClick={() => onTabChange('teams')}
        className={`tab-button ${activeTab === 'teams' ? 'active' : ''}`}
      >
        <Users className="tab-icon" />
        My Teams
      </button>
      <button
        onClick={() => onTabChange('favorites')}
        className={`tab-button ${activeTab === 'favorites' ? 'active' : ''}`}
      >
        <Heart className="tab-icon" />
        Favorites
      </button>
    </div>
  );
}

