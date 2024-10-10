import React from 'react';
import './cart.css';

const CartItem = ({ item, setCartItems }) => {
  const increaseQuantity = () => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.product.id === item.product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decreaseQuantity = () => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.product.id === item.product.id && item.quantity > 1 
          ? { ...cartItem, quantity: cartItem.quantity - 1 } 
          : cartItem
      )
    );
  };

  const removeItem = () => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem.product.id !== item.product.id));
  };

  return (
    <div className="cart-item">
      <img src={item.product.images[0]} alt={item.product.name} />
      <div className="item-details">
        <h3 className="item-type">{item.product.type}</h3>
        <span className="product-name">{item.product.name}</span>
        <div className="quantity-controls">
          <button onClick={decreaseQuantity}>-</button>
          <span>{item.quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
      <div className="item-price">INR {item.product.price.toFixed(2)}</div>
      <button onClick={removeItem} className="remove-button">×</button>
    </div>
  );
};

export default CartItem;
