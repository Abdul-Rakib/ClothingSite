import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './allproducts.css';
import ProductCard from '../../components/ProductCard/productCard';
import ProductFilter from '../../components/Filters/ProductFilter';
import { products } from '../../db/products';

const AllProducts = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showFilters, setShowFilters] = useState(!isMobile);
  const [selectedFilters, setSelectedFilters] = useState({});

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filters = [
    {
      name: 'Type',
      options: [...new Set(products.map(product => product.type))]
    },
    {
      name: 'Price',
      options: ['Under ₹200', '₹200-₹400', 'Above ₹400']
    },
    {
      name: 'Variants',
      options: ['With Variants', 'No Variants']
    }
  ];

  // Function to filter products based on selected filters
  const applyFilters = () => {
    return products.filter(product => {
      let matches = true;

      if (selectedFilters['Type']?.length) {
        matches = selectedFilters['Type'].includes(product.type);
      }

      if (selectedFilters['Price']?.length) {
        const priceMatch = selectedFilters['Price'].some(range => {
          if (range === 'Under ₹200') return product.price < 200;
          if (range === '₹200-₹400') return product.price >= 200 && product.price <= 400;
          if (range === 'Above ₹400') return product.price > 400;
          return false;
        });
        matches = matches && priceMatch;
      }

      if (selectedFilters['Variants']?.length) {
        const variantMatch = selectedFilters['Variants'].includes(
          product.variants ? 'With Variants' : 'No Variants'
        );
        matches = matches && variantMatch;
      }

      return matches;
    });
  };

  const filteredProducts = applyFilters();

  return (
    <div className="container">
      <div className="breadcrumb">Home / Products</div>
      {/* <h1 className="page-title">PRODUCTS</h1> */}

      <div className="layout">
      <ProductFilter
        filters={filters}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        isMobile={isMobile}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
/>


        <div className="product-list">
          {isMobile && !showFilters && (
            <button onClick={() => setShowFilters(true)} className="toggle-filters">
              <FaChevronRight /> Show Filters
            </button>
          )}

          <div className="product-grid">
            <ProductCard products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
