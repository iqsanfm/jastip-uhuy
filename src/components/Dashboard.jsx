import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailPopup from './ProductDetailPopup';
import './Dashboard.css';

// Import foto-foto dari assets
import foto1 from '../assets/2ce1445038148a41a98b42090f2f9635.jpg';
import foto2 from '../assets/f5fdb444fe2a024ccd2b95cb383cc934.jpg';
import foto3 from '../assets/0f151c31df5cd31fa7b18bc90965626c.jpg';
import foto4 from '../assets/db6367457adb24d52077c0b06949e848.jpg';

const Dashboard = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Data dummy untuk produk dengan foto dari assets
  const products = [
    {
      id: 1,
      name: "Sepatu Nike Air Max",
      price: 1500000,
      image: foto1,
      description: "Sepatu olahraga premium dengan teknologi Air Max"
    },
    {
      id: 2,
      name: "Tas Ransel Jansport",
      price: 850000,
      image: foto2,
      description: "Tas ransel berkualitas tinggi untuk aktivitas sehari-hari"
    },
    {
      id: 3,
      name: "Kemeja Polo Ralph Lauren",
      price: 1200000,
      image: foto3,
      description: "Kemeja polo premium dengan bahan katun berkualitas"
    },
    {
      id: 4,
      name: "Jam Tangan Casio G-Shock",
      price: 2500000,
      image: foto4,
      description: "Jam tangan tahan air dan shock untuk aktivitas outdoor"
    },
    {
      id: 5,
      name: "Headphone Sony WH-1000XM4",
      price: 3500000,
      image: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Sony+Headphone",
      description: "Headphone wireless dengan noise cancelling premium"
    },
    {
      id: 6,
      name: "Laptop Asus ROG",
      price: 15000000,
      image: "https://via.placeholder.com/300x200/06B6D4/FFFFFF?text=ROG+Laptop",
      description: "Laptop gaming performa tinggi untuk gamers"
    }
  ];

  const handleProductDetail = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="store-name">Toko Jastip Bandung</h1>
        <p className="store-tagline">Temukan produk berkualitas dengan harga terbaik</p>
      </header>
      
      <main className="dashboard-main">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDetailClick={handleProductDetail}
            />
          ))}
        </div>
      </main>
      
      <ProductDetailPopup
        product={selectedProduct}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </div>
  );
};

export default Dashboard; 