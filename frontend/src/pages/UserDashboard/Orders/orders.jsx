import React from 'react';
import { FaChevronRight } from 'react-icons/fa'; // Import the navigate icon
import './orders.css';
import useGetOrders from '../../../hooks/useGetOrders';

const Order = () => {
  const { loading, error, orders } = useGetOrders(1);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(orders);

  return (
    <div>
      <h2>Orders</h2>
      <div className="orders-container">
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} className="order-card">
              <p>Order ID: {order._id}</p>
              <div className="cart-items">
                <h4>Order Items</h4>
                {order.cartItems.length === 0 ? (
                  <p>No items in the cart.</p>
                ) : (
                  <ul>
                    {order.cartItems.map((item, index) => (
                      <li key={index}>
                        {/* Display cart item details */}
                        <div className='order-item-image'>
                          <img src={item.images[0]} alt={item.name} />
                        </div>
                        <p>Item: {item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {item.size}</p>
                        <p>Color: {item.color}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Order;
