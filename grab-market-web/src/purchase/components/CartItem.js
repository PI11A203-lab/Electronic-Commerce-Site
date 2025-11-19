import React from 'react';
import { Trash2 } from 'lucide-react';

export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-content">
        {/* 아바타 */}
        <div className="cart-item-avatar">
          {item.avatar}
        </div>

        {/* 정보 */}
        <div className="cart-item-info">
          <div className="cart-item-header">
            <div>
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-category">{item.category}</p>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className="cart-item-remove-btn"
            >
              <Trash2 className="cart-item-remove-icon" />
            </button>
          </div>
          <div className="cart-item-tags">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="cart-item-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="cart-item-price-section">
            <span className="cart-item-price">
              ¥{item.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

