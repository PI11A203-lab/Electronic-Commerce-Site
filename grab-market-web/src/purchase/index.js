import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import PurchaseHeader from './components/PurchaseHeader';
import CartItem from './components/CartItem';
import CouponSection from './components/CouponSection';
import OrderSummary from './components/OrderSummary';
import PurchaseProtection from './components/PurchaseProtection';
import EmptyCart from './components/EmptyCart';
import './index.css';

export default function PurchasePage() {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'GPT-Master', category: 'NLP', price: 8900, avatar: 'GM', tags: ['GPT-4', 'Fine-tuning'] },
    { id: 2, name: 'VisionPro', category: 'CV', price: 7500, avatar: 'VP', tags: ['YOLO', 'Segmentation'] },
    { id: 3, name: 'AudioWizard', category: 'Audio', price: 6800, avatar: 'AW', tags: ['Speech Recognition', 'TTS'] },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // 장바구니에서 제거
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  // 쿠폰 적용
  const applyCoupon = () => {
    if (couponCode === 'SAVE20') {
      setAppliedCoupon({ code: 'SAVE20', discount: 0.2, label: '20% OFF' });
    } else if (couponCode === 'FIRST10') {
      setAppliedCoupon({ code: 'FIRST10', discount: 0.1, label: '10% OFF' });
    }
  };

  // 가격 계산
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const discount = appliedCoupon ? subtotal * appliedCoupon.discount : 0;
  const tax = (subtotal - discount) * 0.1;
  const total = subtotal - discount + tax;

  const handleCheckout = () => {
    // 구매 확정 페이지로 이동
    history.push('/confirmation');
  };

  return (
    <div className="purchase-page">
      <PurchaseHeader />

      <main className="purchase-main">
        <div className="purchase-title-section">
          <h2 className="purchase-title">
            <ShoppingCart className="purchase-title-icon" />
            Shopping Cart
          </h2>
          <p className="purchase-subtitle">
            Review your selected AI developers before purchase
          </p>
        </div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="purchase-content">
            {/* 장바구니 아이템 */}
            <div className="purchase-cart-section">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                />
              ))}

              {/* 쿠폰 */}
              <CouponSection
                couponCode={couponCode}
                onCouponCodeChange={setCouponCode}
                onApplyCoupon={applyCoupon}
                appliedCoupon={appliedCoupon}
              />
            </div>

            {/* 주문 요약 */}
            <div className="purchase-sidebar">
              <OrderSummary
                cartItems={cartItems}
                subtotal={subtotal}
                discount={discount}
                tax={tax}
                total={total}
                appliedCoupon={appliedCoupon}
                onCheckout={handleCheckout}
              />

              {/* 보증 정보 */}
              <PurchaseProtection />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

