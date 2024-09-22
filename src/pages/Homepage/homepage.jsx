import React from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import './homepage.css';
import default1 from '../../assets/Images/default1.jpg'; 
import default2 from '../../assets/Images/default2.jpg'; 

const ProductCard = ({ image, type, name, price, variants }) => (
  <div className="product-card">
    <img src={image} alt={name} className="product-image" />
    <div className="product-header">
      <button className="variant-button">
        <FaPlus />
      </button>
      {variants && <span className="variant-text">+{variants}</span>}
    </div>
    <p className="product-type">{type}</p>
    <h3 className="product-name">{name}</h3>
    <p className="product-price">INR {price}</p>
  </div>
);

const Homepage = () => {
  const products = [
    { image: default1, type: 'V-Neck T-Shirt', name: 'Embroidered Seersucker Shirt', price: 499, variants: null },
    { image: default2, type: 'Cotton T Shirt', name: 'Basic Slim Fit T-Shirt', price: 649, variants: 5 },
    { image: default1, type: 'Henley T-Shirt', name: 'Blurred Print T-Shirt', price: 1590, variants: 3 },
    { image: default2, type: 'Crewneck T-Shirt', name: 'Full Sleeve Zipper', price: 250, variants: 2 },
  ];

  return (
    <div className="new-this-week-container">
      <div className="section-header">
        <h2 className="section-title">
          NEW<br />THIS WEEK
          <span className="product-count">(50)</span>
        </h2>
        <button className="see-all-button">See All</button>
      </div>
      
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
