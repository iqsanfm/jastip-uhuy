import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onDetailClick }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{formatPrice(product.price)}</p>
        
        <button 
          className="detail-button"
          onClick={() => onDetailClick(product)}
        >
          Lihat Detail
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 