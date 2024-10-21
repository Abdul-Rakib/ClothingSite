import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa'; // Import the navigate icon
import './orders.css'; // Ensure this file exists
import useGetOrders from '../../../hooks/useGetOrders';

const Order = () => {
  const { loading, error, orders } = useGetOrders();
  const [expandedOrderId, setExpandedOrderId] = useState(null); // State to track expanded orders

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const toggleOrderDetails = (orderId) => {
    // Toggle the expanded state
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  return (
    <div className='order-container'>
      <h2>Orders</h2>
      <div className='order-list'>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className='order-item'>
              <div className='order-summary' onClick={() => toggleOrderDetails(order._id)}>
                <p>Order ID: {order._id}</p>
                <FaChevronRight className={`toggle-icon ${expandedOrderId === order._id ? 'rotated' : ''}`} />
              </div>
              {expandedOrderId === order._id && (
                <div className='order-items'>
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
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
