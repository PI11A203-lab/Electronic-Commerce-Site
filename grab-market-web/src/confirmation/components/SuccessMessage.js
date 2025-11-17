import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function SuccessMessage({ orderNumber }) {
  return (
    <div className="confirmation-success-message">
      <div className="confirmation-success-icon-wrapper">
        <CheckCircle className="confirmation-success-icon" />
      </div>
      <h2 className="confirmation-success-title">
        Purchase Successful! 🎉
      </h2>
      <p className="confirmation-success-subtitle">
        Thank you for your purchase. Your AI developers are ready to use!
      </p>
      <p className="confirmation-success-order-number">
        Order #{orderNumber}
      </p>
    </div>
  );
}

