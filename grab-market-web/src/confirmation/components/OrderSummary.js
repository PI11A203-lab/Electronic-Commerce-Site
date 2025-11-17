import React from 'react';

export default function OrderSummary({ orderDetails, purchasedAIs }) {
  return (
    <div className="confirmation-order-summary">
      <h3 className="confirmation-order-summary-title">Order Summary</h3>
      <div className="confirmation-order-summary-details">
        <div className="confirmation-order-summary-row">
          <span>Order Number</span>
          <span className="confirmation-order-summary-value">{orderDetails.orderNumber}</span>
        </div>
        <div className="confirmation-order-summary-row">
          <span>Order Date</span>
          <span className="confirmation-order-summary-value">{orderDetails.orderDate}</span>
        </div>
        <div className="confirmation-order-summary-row">
          <span>Total Items</span>
          <span className="confirmation-order-summary-value">{purchasedAIs.length} AI Developers</span>
        </div>
        <div className="confirmation-order-summary-total">
          <span className="confirmation-order-summary-total-label">Total Paid</span>
          <span className="confirmation-order-summary-total-value">
            ¥{orderDetails.total.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="confirmation-order-summary-success">
        <p className="confirmation-order-summary-success-text">
          ✓ Payment processed successfully
        </p>
      </div>
    </div>
  );
}

