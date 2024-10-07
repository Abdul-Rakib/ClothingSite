import React, { useState } from 'react';
import { products } from '../../db/products';
import './cart.css';

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.product.images[0]} alt={item.product.name} />
      <div className="item-details">
        <h3 className='item-type'>{item.product.type}</h3>
        <span className="product-name">{item.product.name}</span>
        <div className="quantity-controls">
          <button onClick={() => onDecrease(item.product.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrease(item.product.id)}>+</button>
        </div>
      </div>
      <div className="item-price">INR {item.product.price.toFixed(2)}</div>
      <button onClick={() => onRemove(item.product.id)} className="remove-button">
        ×
      </button>
    </div>
  );
};

const CheckoutButton = ({ onCheckout }) => (
  <button className="checkout-button" onClick={onCheckout}>
    <a href='/checkout'>CHECKOUT</a>
  </button>
);

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { product: products[0], quantity: 1 },
    { product: products[1], quantity: 1 },
    { product: products[2], quantity: 1 },
  ]);

  const [shippingMethod, setShippingMethod] = useState('Standard-Delivery- €5.00');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.product.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.product.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shippingCost = 5.00; // Fixed shipping cost
  const totalPrice = subtotal + shippingCost - discount;

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    // Add your checkout logic here
  };

  const applyCoupon = () => {
    // Example: if coupon code is "DISCOUNT10", apply a discount of INR 10
    if (couponCode === "DISCOUNT10") {
      setDiscount(10);
    } else {
      alert("Invalid coupon code");
    }
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
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>
        <button className="back-to-shop">← Back to shop</button>
      </div>
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
        <div className="coupon-section">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Coupon code"
            className="coupon-input"
          />
          <button onClick={applyCoupon} className="apply-coupon-button">Apply</button>
        </div>
        <CheckoutButton onCheckout={handleCheckout} />
      </div>
    </div>
  );
}
