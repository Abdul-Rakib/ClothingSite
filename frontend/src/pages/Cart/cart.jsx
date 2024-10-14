import React from 'react';
import CartItem from './cartItems';
import CartSummary from './cartSummary';
import Coupon from './coupon';
import './cart.css';
import { useVariableContext } from '../../context/VariableContext';

export default function Cart() {
  const { cartItems, setCartItems, couponDiscount } = useVariableContext();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingCost = 0.00;
  const totalPrice = subtotal + shippingCost - couponDiscount;

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div className="cart-container">
      <div className="cart-items-container">
        <h1>Shopping Cart <span>{totalItems} items</span></h1>
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              setCartItems={setCartItems} // Pass setCartItems to CartItem
            />
          ))}
        </div>
        <button className="back-to-shop">
          <span className="back-to-shop-text">
            <a href="/">← Back to shop</a>
          </span>
        </button>
      </div>

      <div className="cart-summary-container">
        <CartSummary
          totalItems={totalItems}
          subtotal={subtotal}
          shippingCost={shippingCost}
          discount={couponDiscount}
          totalPrice={totalPrice}
        />
        <Coupon />
        <button className="checkout-button" onClick={handleCheckout}>
          <a href="/checkout">CHECKOUT</a>
        </button>
      </div>
    </div>
  );
}
