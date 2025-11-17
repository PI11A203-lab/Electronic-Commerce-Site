import React from 'react';
import { Link } from 'react-router-dom';
import { Star, TrendingUp } from 'lucide-react';
import { API_URL } from '../../config/constants';
import '../index.css';

const ProductList = ({ products }) => {
  return (
    <div className="products-section">
      <h3 className="products-title">All AI Developers</h3>
      <div className="products-grid">
        {products.map((product) => (
          <Link 
            key={product.id} 
            to={`/products/${product.id}`}
            className={`product-card ${product.soldout === 1 ? 'soldout' : ''}`}
          >
            {product.soldout === 1 && <div className="product-blur" />}
            
            <div className="product-header">
              <div className="product-avatar-small">
                {product.name.substring(0, 2)}
              </div>
              <button className="btn-favorite">
                <Star className="favorite-icon" />
              </button>
            </div>

            <div className="product-image-wrapper">
              <img
                className="product-image"
                src={`${API_URL}/${product.imageUrl}`}
                alt={product.name}
              />
            </div>

            <h4 className="product-name">{product.name}</h4>
            
            <div className="product-rating-small">
              <Star className="star-small" />
              <span className="rating-small">4.7</span>
              <span className="reviews-small">(234)</span>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <TrendingUp className="meta-icon" />
                <span>8.2k</span>
              </div>
              <span className="meta-skill">Skill 88%</span>
            </div>

            <div className="product-footer-new">
              <span className="product-price-new">¥{product.price.toLocaleString()}</span>
              <button className="btn-view-small">View</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

