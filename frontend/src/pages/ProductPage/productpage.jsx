import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../../db/products';
import './productpage.css';
import { useVariableContext } from '../../context/VariableContext';

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
  const navigate = useNavigate();
  const product = products.find(prod => prod.id === id);

  const {
    cartItems,
    setCartItems,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize
  } = useVariableContext();

  if (!product) {
    return <div>Product not found</div>;
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isInCart, setIsInCart] = useState(false); // Track if product is in the cart

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleAddToCart = () => {
    if (!isInCart) {
      // Add product to the cart
      const newItem = {
        ...product,
        selectedColor,
        selectedSize,
        quantity: 1,
      };
      setCartItems((prevItems) => [...prevItems, newItem]);
      setIsInCart(true); // Set product as added to the cart
    } else {
      // Navigate to the cart if product is already in the cart
      navigate('/cart');
    }
  };

  // Log cart items after update
  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

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
              className={`thumbnail ${
                currentImageIndex === index ? 'selected' : ''
              }`}
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

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          {isInCart ? 'Go to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
