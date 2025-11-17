import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import axios from 'axios';
import PurchaseHeader from './components/PurchaseHeader';
import CartItem from './components/CartItem';
import CouponSection from './components/CouponSection';
import OrderSummary from './components/OrderSummary';
import PurchaseProtection from './components/PurchaseProtection';
import EmptyCart from './components/EmptyCart';
import { API_URL } from '../config/constants';
import './index.css';

export default function PurchasePage() {
  const history = useHistory();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // localStorage에서 장바구니 아이템 가져오기
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const cartItemIds = JSON.parse(savedCart);
        // 장바구니에 있는 상품 ID로 상품 정보 가져오기
        Promise.all(
          cartItemIds.map(id => 
            axios.get(`${API_URL}/products/${id}`)
              .then(res => {
                const product = res.data.product;
                return {
                  id: product.id,
                  name: product.name,
                  category: 'NLP', // 기본값, 필요시 API에서 가져오기
                  price: product.price,
                  avatar: product.name.substring(0, 2),
                  tags: ['AI/ML', 'Expert'] // 기본값
                };
              })
          )
        ).then(items => {
          setCartItems(items);
          setLoading(false);
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

        {loading ? (
          <div className="text-center py-12">
            <div className="text-xl text-gray-600">Loading...</div>
          </div>
        ) : cartItems.length === 0 ? (
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

