// src/TotalPrice.js
import React from 'react';

const TotalPrice = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Total Price</h2>
      <p>${totalPrice}</p>
    </div>
  );
};

export default TotalPrice;
