// Footer.jsx
import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = ()=>{
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className= 'col'>
            <h3>Our Policies</h3>
            <ul>
              <li><Link to="/terms-conditions">Terms Condition</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
              <li><Link to="/shipping-policy">Shipping Policy</Link></li>
            </ul>
          </div>
          <div className= 'col'>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/wishlist">My Wishlist</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className='col'>
            <h3>Contact Us</h3>
            <p>Email: support.thriftnbliss@gmail.com</p>
            <p>Phone: +91 987654321</p>
            <p>Address: Jorethang, South Sikkim</p>
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