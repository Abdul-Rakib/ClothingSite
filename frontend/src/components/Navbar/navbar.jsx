import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes, FaUser, FaHeart, FaPhoneAlt, FaHome } from 'react-icons/fa'; // Import FaHome
import './Navbar.css';
import { useVariableContext } from '../../context/VariableContext';

const BottomNavbar = () => {
  const { isLoggedIn } = useVariableContext();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Top Navbar For PC */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="navbar-menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          <h1 className="navbar-title">Brand Name</h1>
          <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/collection'>Collection</Link></li>
            <li><Link to='/new'>New</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="navbar-icons">
            <li><Link to='/wishlist'><FaHeart className="navbar-icon" size={35} /></Link></li>
            <li className="navbar-cart">
              <Link to='/cart' className="cart-link">
                <span className="navbar-cart-text">Cart</span>
                <FaShoppingCart size={20} />
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <Link to='/dashboard' className="navbar-dashboard">
                  <span className="navbar-dashboard-text">Dashboard</span>
                  <FaUser className="navbar-icon" size={25} />
                </Link>
              ) : (
                <Link to='/login' className="navbar-login">
                  <span className="navbar-login-text">Login</span>
                  <FaUser className="navbar-icon" size={25} />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>

      {/* Bottom Navbar for Mobile */}
      <nav className="bottom-navbar">
        <div className="bottom-navbar-item">
          <Link to='/'>
            <FaHome size={25} /> {/* Home Icon */}
          </Link>
        </div>
        <div className="bottom-navbar-item">
          <Link to='/contact'>
            <FaPhoneAlt size={25} />
          </Link>
        </div>
        <div className="bottom-navbar-item">
          <Link to='/wishlist'>
            <FaHeart size={25} />
          </Link>
        </div>
        <div className="bottom-navbar-item">
          <Link to='/cart'>
            <FaShoppingCart size={25} />
          </Link>
        </div>
        <div className="bottom-navbar-item">
          {isLoggedIn ? (
            <Link to='/profile'>
              <FaUser size={25} />
            </Link>
          ) : (
            <Link to='/login'>
              <span className='bottom-navbar-login-text'>Login</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default BottomNavbar;
