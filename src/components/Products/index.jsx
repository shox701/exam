import React, { useEffect } from 'react';
import CardComponent from '../Cart';
import { useProducts } from '../context/index';
import './products.style.scss';

const Products = () => {
  const products = useProducts();

  return (
    <div className="text-content">
      <h2>Our Products</h2>
      <div className="products-container">
        {products.map((item) => (
          <CardComponent
            key={item.id}
            title={item.title}
            price={item.price}
            rate={item.rating.rate}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
