import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import './orders.css';
import useGetOrders from '../../../hooks/useGetOrders';

const Order = () => {
  const { loading, error, orders } = useGetOrders();
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const navigateToOrderDetails = (order) => {
    // Navigate to /orderdetails and pass the selected order via state
    navigate('/orderdetails', { state: { order } });
  };

  return (
    <div className='order-container'>
      <h2>My Orders</h2>
      <div className='order-list'>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (

            <div key={order._id} className='order-item'>
              <div className='order-summary' onClick={() => navigateToOrderDetails(order)}>
                <div className='order-id-container'>
                  <p>Order ID: {order._id}</p>
                  <div className="order-preview">
                    {order.cartItems.slice(0, 2).map((item, index) => (
                      <img key={index} src={item.images[0]} alt={item.name} className='order-preview-img' />
                    ))}
                  </div>
                </div>

                <div className='order-status-container'>
                  <div>
                    <p>Date: xx/xx/xxxx</p>
                    <p>Total Amount: 1499 INR</p>
                    <p>Status: Shipped</p>
                  </div>
                </div>
                  <FaChevronRight className="toggle-icon" />

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
