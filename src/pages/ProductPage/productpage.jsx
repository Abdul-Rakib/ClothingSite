import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../db/products';
import './productpage.css';

const ColorOption = ({ color, isSelected, handleClick }) => (
  <button
    onClick={handleClick}
    className={`color-option ${isSelected ? 'selected' : ''}`}
    style={{ backgroundColor: color }}
  />
);

const SizeOption = ({ size, isSelected, handleClick }) => (
  <button
    onClick={handleClick}
    className={`size-option ${isSelected ? 'selected' : ''}`}
  >
    {size}
  </button>
);

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find(prod => prod.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="product-container">
      <div className="image-gallery">
        <div className="main-image-container">
          <img 
            src={product.images[currentImageIndex]} 
            alt={product.name} 
            className="main-image"
          />
        </div>
        <div className="thumbnail-images">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${product.name} thumbnail ${index + 1}`}
              className={`thumbnail ${currentImageIndex === index ? 'selected' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">INR {product.price}</p>
        <p className="tax-info">MRP incl. of all taxes</p>
        <p className="product-description">{product.description}</p>
        
        <div className="color-selection">
          <p className="option-label">Color</p>
          <div className="color-options">
            {product.colors.map((color) => (
              <ColorOption
                key={color}
                color={color}
                isSelected={color === selectedColor}
                handleClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>
        
        <div className="size-selection">
          <p className="option-label">Size</p>
          <div className="size-options">
            {product.sizes.map((size) => (
              <SizeOption
                key={size}
                size={size}
                isSelected={size === selectedSize}
                handleClick={() => setSelectedSize(size)}
              />
            ))}
          </div>
          <span className="measurement-guide">FIND YOUR SIZE | MEASUREMENT GUIDE</span>
        </div>
        
        <button className="add-to-cart-button">ADD TO CART</button>
      </div>
    </div>
  );
}
