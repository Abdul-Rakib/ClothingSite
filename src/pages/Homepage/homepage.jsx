import React from 'react';
import ProductCard from '../../components/ProductCard/productCard';
import './homepage.css';
import { products } from '../../db/products';

const Homepage = () => {

  return (
    <div className="homepage">
    <div className="new-this-week-container">
      <div className="section-header">
        <h2 className="section-title">
          NEW<br />THIS WEEK
          <span className="product-count">(50)</span>
        </h2>
        <button className="see-all-button">See All</button>
      </div>
      
      <div className="product-grid">
        <ProductCard products = {products} />
      </div>
    </div>
    </div>
  );
};

export default Homepage;
