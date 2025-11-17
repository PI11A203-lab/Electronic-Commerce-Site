import React, { useState } from 'react';
import Header from './components/Header';
import SuccessMessage from './components/SuccessMessage';
import EmailNotification from './components/EmailNotification';
import PurchasedAIList from './components/PurchasedAIList';
import OrderSummary from './components/OrderSummary';
import ActionButtons from './components/ActionButtons';
import SupportInfo from './components/SupportInfo';
import { purchasedAIs, userEmail, generateOrderDetails } from './mockData';
import './index.css';

export default function PurchaseConfirmation() {
  const [orderDetails] = useState(generateOrderDetails());

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="confirmation-page">
      <Header />
      <main className="confirmation-main">
        <SuccessMessage orderNumber={orderDetails.orderNumber} />
        <EmailNotification userEmail={userEmail} onCopyEmail={copyToClipboard} />
        <PurchasedAIList purchasedAIs={purchasedAIs} onCopyCode={copyToClipboard} />
        <OrderSummary orderDetails={orderDetails} purchasedAIs={purchasedAIs} />
        <ActionButtons />
        <SupportInfo />
      </main>
    </div>
  );
}

