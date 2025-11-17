import React from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp, Award } from 'lucide-react';
import '../index.css';

const RankingSection = ({ topProducts }) => {
  if (topProducts.length === 0) {
    return null;
  }

  return (
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
              <span className="ranking-price">¥{product.price.toLocaleString()}</span>
              <button className="btn-view">View Profile</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RankingSection;

