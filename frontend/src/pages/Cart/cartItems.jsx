import React from 'react';
import './cart.css';
import { useVariableContext } from '../../context/VariableContext';

const CartItem = ({ item }) => {
  console.log(item);
  
  const { cartItems, setCartItems } = useVariableContext();
  

  const increaseQuantity = () => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decreaseQuantity = () => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id && item.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const removeItem = () => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.images[0]} alt={item.name} />
      <div className="item-details">
        <h3 className="item-type">{item.type}</h3>
        <span className="product-name">{item.name}</span>
        <div className="quantity-controls">
          <button onClick={decreaseQuantity}>-</button>
          <span>{item.quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
      <div className="item-price">INR {item.price.toFixed(2)}</div>
      <button onClick={removeItem} className="remove-button">×</button>
      <div className="item-options">
        <p>Selected Color: <span style={{ color: item.selectedColor }}>{item.selectedColor}</span></p>
        <p>Selected Size: {item.selectedSize}</p>
        <p>Stock Available: {item.stock}</p>
      </div>
    </div>
  );
};

export default CartItem;
