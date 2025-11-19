import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <div className="empty-cart">
      <ShoppingCart className="empty-cart-icon" />
      <h3 className="empty-cart-title">Your cart is empty</h3>
      <p className="empty-cart-description">
        Browse our AI developers and start building your team!
      </p>
      <Link to="/" className="empty-cart-button">
        Browse Developers
      </Link>
    </div>
  );
}

