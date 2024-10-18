import React from 'react';
import './cart.css';
import { useVariableContext } from '../../context/VariableContext';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ item }) => {
  const { setCartItems } = useVariableContext();

  const removeItem = () => {
    setCartItems(prevItems => prevItems.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.images[0]} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-type">{item.type}</h3>
        <span className="product-name">{item.name}</span>
        <div className="item-options">
          <p>Color: {item.color}</p>
          <p>Size: {item.size}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      </div>
      <div className="item-price">₹ {item.price.toFixed(2)}</div>
      <button onClick={removeItem} className="remove-button">
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
