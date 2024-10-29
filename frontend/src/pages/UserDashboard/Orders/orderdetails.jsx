import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to access state
import './orderDetails.css';

const OrderDetails = () => {
  const location = useLocation();
  const { order } = location.state || {}; // Access the passed order from state

  if (!order) {
    return <p>No order details available.</p>;
  }

  return (
    <div className='order-details'>
      <h4>Order Items</h4>
      {order.cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {order.cartItems.map((item, index) => (
            <li key={index} className='cart-item'>
              <div className='cart-item-details'>
                <img src={item.images[0]} alt={item.name} />
                <p>Item: {item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderDetails;
