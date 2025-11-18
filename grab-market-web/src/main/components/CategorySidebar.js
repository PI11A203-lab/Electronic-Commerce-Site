import React from 'react';
import { Filter } from 'lucide-react';
import '../index.css';

const CategorySidebar = ({ categories, selectedCategory, onCategoryChange, sortBy, onSortChange }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h3 className="sidebar-title">
          <Filter className="sidebar-icon" />
          Categories
        </h3>
        <div className="category-list">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            >
              <div className="category-info">
                <span className="category-icon">{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
              </div>
              <span className="category-count">{cat.count}</span>
            </button>
          ))}
        </div>

        <div className="sort-section">
          <h4 className="sort-title">Sort by</h4>
          <select 
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="sort-select"
          >
            <option value="trending">🔥 トレンド</option>
            <option value="downloads">📥 最多ダウンロード</option>
            <option value="rating">⭐ 最高評価</option>
            <option value="price-low">💰 価格: 低から高</option>
            <option value="price-high">💎 価格: 高から低</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;

