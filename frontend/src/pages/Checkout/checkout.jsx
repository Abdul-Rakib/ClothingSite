import React, { useState } from 'react';
import './checkout.css';

export default function Checkout() {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [shippingAddress, setShippingAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress({ ...shippingAddress, [name]: value });
  };

  const handlePayment = () => {
    alert('Proceeding to payment gateway...');
    // Integrate payment gateway logic here
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <div className="customer-shipping-info">
          <div className="customer-info">
            <h2>Customer Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customerInfo.name}
              onChange={handleCustomerInfoChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={customerInfo.email}
              onChange={handleCustomerInfoChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={customerInfo.phone}
              onChange={handleCustomerInfoChange}
              required
            />
          </div>

          <div className="shipping-address">
            <h2>Shipping Address</h2>
            <input
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              value={shippingAddress.addressLine1}
              onChange={handleShippingAddressChange}
              required
            />
            <input
              type="text"
              name="addressLine2"
              placeholder="Address Line 2"
              value={shippingAddress.addressLine2}
              onChange={handleShippingAddressChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingAddress.city}
              onChange={handleShippingAddressChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={shippingAddress.state}
              onChange={handleShippingAddressChange}
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingAddress.postalCode}
              onChange={handleShippingAddressChange}
              required
            />
          </div>
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Product Name</span>
            <span>INR 100.00</span>
          </div>
          <div className="summary-item">
            <span>Shipping</span>
            <span>INR 5.00</span>
          </div>
          <div className="summary-item total">
            <span>Total</span>
            <span>INR 105.00</span>
          </div>
          <button className="make-payment-button" onClick={handlePayment}>
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}
