import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/productCard';
import './homepage.css';
import Hero from '../../components/Hero/hero';
import { products } from '../../db/products';

const Homepage = () => {
  // Calculate the total number of products
  const totalProducts = products.length;

  return (
    <>
      <Hero />
      <div className="homepage">
        <div className="new-this-week-container">
          <div className="section-header">
            <h2 className="section-title">
              NEW<br />THIS WEEK
              <span className="product-count">({totalProducts})</span> {/* Dynamic product count */}
            </h2>
            <button className="see-all-button">
              <Link to='/products'>See All</Link>
            </button>
          </div>

          <div className="product-grid">
            <ProductCard products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
