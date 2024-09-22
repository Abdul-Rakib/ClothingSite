import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { MdCall, MdContactPhone, MdContacts, MdContactSupport, MdFavorite, MdHelp, MdHelpCenter, MdLiveHelp, MdMail, MdPerson } from 'react-icons/md';
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
          <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
            <li>Home</li>
            <li>Collections</li>
            <li>New</li>
          </ul>
        </div>
        <div className="navbar-right">
          <ul className="navbar-icons">
            <li><MdFavorite className="navbar-icon" size={35} /></li>
            <li className="navbar-cart">
              <span className="navbar-cart-text">Cart</span>
              <FaShoppingCart size={20} />
            </li>
            <li><MdPerson className="navbar-icon" size={35} /></li>
          </ul>
        </div>
      </nav>

      {/* Bottom Navbar for Mobile */}
      <nav className="bottom-navbar">
      <div className="bottom-navbar-item">
          <MdCall size={25} />
          <span>Contact</span>
        </div>
        <div className="bottom-navbar-item">
          <MdFavorite size={25} />
          <span>Wishlist</span>
        </div>
        <div className="bottom-navbar-item">
          <FaShoppingCart size={25} />
          <span>Cart</span>
        </div>
        <div className="bottom-navbar-item">
          <MdPerson size={25} />
          <span>Profile</span>
        </div>
      </nav>
    </>
  );
};

export default BottomNavbar;
