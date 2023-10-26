// src/Product.js
import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <p>
        {product.name} - ${product.price}{' '}
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </p>
    </div>
  );
};

export default Product;
