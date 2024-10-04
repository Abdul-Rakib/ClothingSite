import React from 'react';
import './productCard.css';

const ProductCard = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div className="product-card-image-box">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="product-card-content">
            <p className="product-type">{product.type}</p>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-details">
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
      ))}
      </>
  );
};

export default ProductCard;
