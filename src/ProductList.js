// src/ProductList.js
import React from 'react';
import Product from './Product';

const productList = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      {productList.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
