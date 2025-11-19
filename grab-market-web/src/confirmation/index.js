import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SuccessMessage from './components/SuccessMessage';
import EmailNotification from './components/EmailNotification';
import PurchasedAIList from './components/PurchasedAIList';
import OrderSummary from './components/OrderSummary';
import ActionButtons from './components/ActionButtons';
import SupportInfo from './components/SupportInfo';
import { API_URL } from '../config/constants';
import './index.css';

export default function PurchaseConfirmation() {
  const [purchasedAIs, setPurchasedAIs] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // localStorage에서 구매한 상품 ID 가져오기
    const savedCart = localStorage.getItem('cart');
    const userFromStorage = localStorage.getItem('user') || sessionStorage.getItem('user');
    
    if (userFromStorage) {
      try {
        const user = JSON.parse(userFromStorage);
        setUserEmail(user.email || 'user@example.com');
      } catch (e) {
        setUserEmail('user@example.com');
      }
    }

    if (savedCart) {
      try {
        const cartItemIds = JSON.parse(savedCart);
        Promise.all(
          cartItemIds.map(id => 
            axios.get(`${API_URL}/products/${id}`)
              .then(res => {
                const product = res.data.product;
                return {
                  id: product.id,
                  name: product.name,
                  category: 'NLP',
                  price: product.price,
                  avatar: product.name.substring(0, 2),
                  activationCode: `${product.name.toUpperCase().replace(/\s+/g, '-')}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
                  documentUrl: '#'
                };
              })
          )
        ).then(items => {
          setPurchasedAIs(items);
          setOrderDetails({
            orderNumber: 'AIDE-2025-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
            orderDate: new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            }),
            total: items.reduce((sum, ai) => sum + ai.price, 0)
          });
          setLoading(false);
          // 구매 완료 후 장바구니 비우기
          localStorage.removeItem('cart');
        }).catch(error => {
          console.error('エラー発生 : ', error);
          setLoading(false);
        });
      } catch (e) {
        console.error('Failed to parse cart data:', e);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  if (loading || !orderDetails) {
    return (
      <div className="confirmation-page">
        <Header />
        <main className="confirmation-main">
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Loading...</div>
          </div>
        </main>
      </div>
    );
  }

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

