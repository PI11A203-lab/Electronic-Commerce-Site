import React from 'react';

export default function PurchasesTab({ purchases }) {
  return (
    <div className="purchases-grid">
      {purchases.map((purchase) => (
        <div key={purchase.id} className="purchase-card">
          <div className="purchase-header">
            <div className="purchase-avatar">{purchase.avatar}</div>
            <div className="purchase-info">
              <h3 className="purchase-name">{purchase.name}</h3>
              <p className="purchase-category">{purchase.category}</p>
            </div>
          </div>
          <div className="purchase-code">
            <span className="code-label">🔑 Activation Code</span>
            <code className="code-text">{purchase.code}</code>
          </div>
          <div className="purchase-footer">
            <span className="purchase-price">{purchase.price}원</span>
            <span className="purchase-date">{purchase.purchaseDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

