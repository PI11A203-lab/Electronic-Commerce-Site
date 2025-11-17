import React from 'react';
import { Tag } from 'lucide-react';

export default function CouponSection({ couponCode, onCouponCodeChange, onApplyCoupon, appliedCoupon }) {
  return (
    <div className="coupon-section">
      <div className="coupon-header">
        <Tag className="coupon-icon" />
        <h3 className="coupon-title">Have a coupon code?</h3>
      </div>
      <div className="coupon-input-group">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => onCouponCodeChange(e.target.value.toUpperCase())}
          placeholder="Enter code (e.g., SAVE20)"
          className="coupon-input"
        />
        <button
          onClick={onApplyCoupon}
          className="coupon-apply-btn"
        >
          Apply
        </button>
      </div>
      {appliedCoupon && (
        <div className="coupon-applied">
          ✓ Coupon applied: {appliedCoupon.label}
        </div>
      )}
    </div>
  );
}

