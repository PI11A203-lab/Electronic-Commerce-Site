import React from 'react';
import { Heart, Star } from 'lucide-react';

export default function FavoritesTab({ favorites }) {
  return (
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
            <span className="favorite-price">¥{fav.price.toLocaleString()}</span>
            <button className="btn-remove-favorite">
              <Heart className="w-5 h-5 filled" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

