import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { MdCall, MdFavorite, MdPerson } from 'react-icons/md';
import './Navbar.css';

const BottomNavbar = () => {
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
            <li><Link to='/wishlist'><MdFavorite className="navbar-icon" size={35} /></Link></li>
            <li className="navbar-cart">
              <Link to='/cart' className="cart-link">
                <span className="navbar-cart-text">Cart</span>
                <FaShoppingCart size={20} />
              </Link>
            </li>
            <li><Link to='/dashboard'><MdPerson className="navbar-icon" size={35} /></Link></li>
          </ul>
        </div>
      </nav>

      {/* Bottom Navbar for Mobile */}
      <nav className="bottom-navbar">
        <div className="bottom-navbar-item">
          <Link to='/contact'>
            <MdCall size={25} />
            {/* <span>Contact</span> */}
          </Link>
        </div>
        <div className="bottom-navbar-item">
          <Link to='/wishlist'>
            <MdFavorite size={25} />
            {/* <span>Wishlist</span> */}
          </Link>
        </div>
        <div className="bottom-navbar-item">
          <Link to='/cart'>
            <FaShoppingCart size={25} />
            {/* <span>Cart</span> */}
          </Link>
        </div>
        <div className="bottom-navbar-item">
          <Link to='/profile'>
            <MdPerson size={25} />
            {/* <span>Profile</span> */}
          </Link>
        </div>
      </nav>
    </>
  );
};

export default BottomNavbar;
