import React from 'react';

const ImageGallery = ({ images, currentImageIndex, onThumbnailClick }) => (
  <div className="image-gallery">
    <div className="main-image-container">
      <img
        src={images[currentImageIndex]}
        alt="Product"
        className="main-image"
      />
    </div>
    <div className="thumbnail-images">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          className={`thumbnail ${currentImageIndex === index ? 'selected' : ''}`}
          onClick={() => onThumbnailClick(index)}
        />
      ))}
    </div>
  </div>
);

export default ImageGallery;
