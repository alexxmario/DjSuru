import React from 'react';

const ImageGallery = ({ images = [] }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img
            src={`/images/${image.filename}`}
            alt={image.alt || `Image ${index + 1}`}
            style={{ maxWidth: '300px', margin: '10px' }}
          />
          {image.caption && <p>{image.caption}</p>}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;