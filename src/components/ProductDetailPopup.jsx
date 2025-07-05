import React from 'react';
import './ProductDetailPopup.css';

const ProductDetailPopup = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const shippingServices = [
    {
      name: "JNE Regular",
      price: 15000,
      duration: "2-3 hari",
      description: "Pengiriman standar ke seluruh Indonesia"
    },
    {
      name: "JNE YES",
      price: 25000,
      duration: "1-2 hari",
      description: "Pengiriman cepat ke seluruh Indonesia"
    },
    {
      name: "SiCepat Regular",
      price: 12000,
      duration: "2-4 hari",
      description: "Pengiriman ekonomis ke seluruh Indonesia"
    },
    {
      name: "SiCepat HALU",
      price: 20000,
      duration: "1-2 hari",
      description: "Pengiriman cepat ke seluruh Indonesia"
    },
    {
      name: "J&T Express",
      price: 13000,
      duration: "2-3 hari",
      description: "Pengiriman terjangkau ke seluruh Indonesia"
    },
    {
      name: "Tiki",
      price: 18000,
      duration: "2-4 hari",
      description: "Pengiriman terpercaya ke seluruh Indonesia"
    }
  ];

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>
          ×
        </button>
        
        <div className="popup-header">
          <h2 className="popup-title">Detail Produk</h2>
        </div>

        <div className="popup-body">
          <div className="product-detail-section">
            <div className="product-image-large">
              <img src={product.image} alt={product.name} />
            </div>
            
            <div className="product-info-detail">
              <h3 className="product-name-detail">{product.name}</h3>
              <p className="product-price-detail">{formatPrice(product.price)}</p>
              <p className="product-description">{product.description}</p>
            </div>
          </div>

          <div className="shipping-section">
            <h3 className="shipping-title">Jasa Pengiriman</h3>
            <p className="shipping-subtitle">
              📦 Dapat dikirim ke seluruh Indonesia
            </p>
            
            <div className="shipping-services">
              {shippingServices.map((service, index) => (
                <div key={index} className="shipping-service">
                  <div className="service-info">
                    <h4 className="service-name">{service.name}</h4>
                    <p className="service-description">{service.description}</p>
                    <div className="service-details">
                      <span className="service-duration">⏱️ {service.duration}</span>
                      <span className="service-price">💰 {formatPrice(service.price)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="additional-info">
            <div className="info-item">
              <span className="info-icon">🛡️</span>
              <span className="info-text">Garansi 100% keaslian produk</span>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <span className="info-text">Konsultasi gratis via WhatsApp</span>
            </div>
            <div className="info-item">
              <span className="info-icon">🚚</span>
              <span className="info-text">Pengiriman ke seluruh Indonesia</span>
            </div>
            <div className="info-item">
              <span className="info-icon">🔄</span>
              <span className="info-text">Dapat melakukan request barang khusus</span>
            </div>
          </div>
        </div>

        <div className="popup-footer">
          <button className="order-button">
            Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPopup; 