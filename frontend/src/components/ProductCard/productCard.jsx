import React from 'react';
import './productCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
  console.log(products);
  
  return (
    <>
      {products.map((product, index) => (
        <Link key={index} to={`/products/${product.id}`} className="product-card-link">
          <div className="product-card">
            <div className="product-card-image-box">
              <img
                src={product.images[0]} 
                // src={`/assets/Images/${product.images[0].split('/').pop()}`}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-card-content">
              <p className="product-type">{product.type}</p>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-details">
                <div className="price-variants">
                  <p className="product-price">
                    ₹{parseInt(product.price).toLocaleString("en-IN")}
                  </p>
                  {product.variants && (
                    <span className="product-variants">
                      +{product.variants} variants
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
