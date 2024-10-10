import React from 'react';
import { FaChevronRight } from 'react-icons/fa'; // Import the navigate icon
import './orders.css';

const Order = ({ orders }) => {
  return (
    <div className="orders-container"> {/* Added a unique container class */}
      {orders.length > 0 ? (
        orders.map((order) => (
          <React.Fragment key={order.id}>
            <div className="order-row">
              <div className="order-container">
                <div className="order-image">
                  <img src={order.productImage} alt={order.title} className="order-product-image" /> {/* Updated class name */}
                </div>
                <div className="order-details">
                  <h4>{order.title}</h4>
                  <p>Price: ₹{order.price}</p>
                  <p>Order Date: {order.orderDate}</p>
                </div>
              </div>
              <div className={`order-status ${order.status}`}>
                {order.status.toUpperCase()}
              </div>
              <div className="view-details">
                <button className="details-button">
                  View Order Details <FaChevronRight className="navigate-icon" />
                </button>
              </div>
            </div>
            <hr className="divider" />
          </React.Fragment>
        ))
      ) : (
        <p>No orders available.</p>
      )}
    </div>
  );
};

export default Order;
