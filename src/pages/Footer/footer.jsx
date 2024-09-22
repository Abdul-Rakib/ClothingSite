// Footer.jsx
import React from 'react';
import './footer.css';

const Footer = ()=>{
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className= 'col'>
            <h3>Our Policies</h3>
            <ul>
              <li><a href="/">Terms Condition</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
              <li><a href="/shipping-policy">Shipping Policy</a></li>
            </ul>
          </div>
          <div className= 'col'>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">All Products</a></li>
              <li><a href="/wishlist">My Wishlist</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className='col'>
            <h3>Contact Us</h3>
            <p>Email: support@clothingsite.com</p>
            <p>Phone: +91 9999999999</p>
            <p>Address: Khalpara, Siliguri West Bengal 121212</p>
          </div>
        </div>
        <div className='bottomBar'>
          <span>&copy; 2024 Clothing Site . All rights reserved.</span>
          <span> Designed and Developed By ~Abdul Rakib</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;