import React from 'react';
import { ShoppingBag, Star, Users, Heart } from 'lucide-react';

export default function StatsSection({ stats }) {
  return (
    <div className="profile-stats">
      <div className="stat-card">
        <ShoppingBag className="stat-icon" />
        <div className="stat-number">{stats.purchases}</div>
        <div className="stat-label">Purchases</div>
      </div>
      <div className="stat-card">
        <Star className="stat-icon" />
        <div className="stat-number">{stats.reviews}</div>
        <div className="stat-label">Reviews</div>
      </div>
      <div className="stat-card">
        <Users className="stat-icon" />
        <div className="stat-number">{stats.teams}</div>
        <div className="stat-label">Teams</div>
      </div>
      <div className="stat-card">
        <Heart className="stat-icon" />
        <div className="stat-number">{stats.favorites}</div>
        <div className="stat-label">Favorites</div>
      </div>
    </div>
  );
}

