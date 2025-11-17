import React from 'react';
import { CreditCard, ChevronRight, Lock } from 'lucide-react';

export default function OrderSummary({ 
  cartItems, 
  subtotal, 
  discount, 
  tax, 
  total, 
  appliedCoupon,
  onCheckout 
}) {
  return (
    <div className="order-summary">
      <h3 className="order-summary-title">Order Summary</h3>
      <div className="order-summary-details">
        <div className="order-summary-row">
          <span>Subtotal ({cartItems.length} items)</span>
          <span className="order-summary-value">${subtotal.toLocaleString()}</span>
        </div>
        {appliedCoupon && (
          <div className="order-summary-row discount">
            <span>Discount ({appliedCoupon.label})</span>
            <span className="order-summary-value">-${discount.toLocaleString()}</span>
          </div>
        )}
        <div className="order-summary-row">
          <span>Tax (10%)</span>
          <span className="order-summary-value">${tax.toLocaleString()}</span>
        </div>
        <div className="order-summary-total">
          <span className="order-summary-total-label">Total</span>
          <span className="order-summary-total-value">
            ${Math.round(total).toLocaleString()}
          </span>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="checkout-btn"
      >
        <CreditCard className="checkout-icon" />
        Proceed to Checkout
        <ChevronRight className="checkout-arrow" />
      </button>
      <div className="checkout-security">
        <Lock className="checkout-security-icon" />
        <span>Secure checkout powered by Stripe</span>
      </div>
    </div>
  );
}

