import React from 'react';

export default function PurchaseProtection() {
  return (
    <div className="purchase-protection">
      <h4 className="purchase-protection-title">Purchase Protection</h4>
      <ul className="purchase-protection-list">
        <li className="purchase-protection-item">
          <span className="purchase-protection-check">✓</span>
          <span>30-day money-back guarantee</span>
        </li>
        <li className="purchase-protection-item">
          <span className="purchase-protection-check">✓</span>
          <span>Secure payment processing</span>
        </li>
        <li className="purchase-protection-item">
          <span className="purchase-protection-check">✓</span>
          <span>Instant delivery to your email</span>
        </li>
        <li className="purchase-protection-item">
          <span className="purchase-protection-check">✓</span>
          <span>24/7 customer support</span>
        </li>
      </ul>
    </div>
  );
}

