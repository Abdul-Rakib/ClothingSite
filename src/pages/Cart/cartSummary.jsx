import React from 'react';
import './cart.css';

const CartSummary = ({ totalItems, subtotal, shippingCost, discount, totalPrice }) => {
  return (
    <div className="cart-summary">
      <h2>Summary</h2>
      <div className="summary-row">
        <span>ITEMS {totalItems}</span>
        <span>INR {subtotal.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>SHIPPING</span>
        <span>INR {shippingCost.toFixed(2)}</span>
      </div>
      <div className="summary-row">
        <span>DISCOUNT</span>
        <span>INR {discount.toFixed(2)}</span>
      </div>
      <div className="summary-row total">
        <span>TOTAL</span>
        <span>INR {totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartSummary;
