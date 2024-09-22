import React, { useState } from 'react';
import { FaSearch, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import default1 from '../../assets/Images/default1.jpg'; 
import default2 from '../../assets/Images/default2.jpg'; 
import './hero.css';

const HeroComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: default1, title: 'Jacket Men', price: 'INR 799.00' },
    { image: default2, title: 'Turtle Neck Sweatshirt', price: 'INR 1299.00' },
    { image: default1, title: 'Cotton T Shirt', price: 'INR 999.00' },
    { image: default2, title: 'Jeans Men', price: 'INR 1199.00' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-container">
      <div className="hero-inner">
        {/* New Collection and Search Bar in one row */}
        <div className="hero-row">
          <div className="hero-collection">
            <h1 className="hero-title">NEW<br />COLLECTION</h1>
            <p className="hero-subtitle">Winter 2024</p>
          </div>
          <div className="hero-searchbar">
            <input
              type="text"
              placeholder="Search"
              className="hero-search-input"
            />
            <FaSearch className="hero-search-icon" />
          </div>
        </div>

        {/* Image Carousel */}
        <div className="hero-carousel">
          <div className="hero-slides">
            {slides.map((slide, index) => (
              <div key={index} className={`hero-slide ${index === currentSlide ? '' : 'hidden'}`}>
                <img src={slide.image} alt={slide.title} className="hero-slide-image" />
                <p className="hero-slide-title">{slide.title}</p>
                <p className="hero-slide-price">{slide.price}</p>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="hero-carousel-button hero-carousel-prev">
            <FaChevronLeft />
          </button>
          <button onClick={nextSlide} className="hero-carousel-button hero-carousel-next">
            <FaChevronRight />
          </button>
        </div>

        {/* Go To Shop Button */}
        <button className="hero-shop-button">
          Go To Shop
          <FaArrowRight className="hero-shop-icon" />
        </button>
      </div>
    </div>
  );
};

export default HeroComponent;
