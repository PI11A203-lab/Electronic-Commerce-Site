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
            <option value="trending">🔥 Trending</option>
            <option value="downloads">📥 Most Downloads</option>
            <option value="rating">⭐ Highest Rated</option>
            <option value="newest">🆕 Newest</option>
            <option value="price-low">💰 Price: Low to High</option>
            <option value="price-high">💎 Price: High to Low</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;

