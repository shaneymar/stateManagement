// src/Main.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import TotalPrice from './TotalPrice';


const Main = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Shopping Cart App</h1>
        <ProductList addToCart={addToCart} />
        &nbsp;
        <Cart cart={cart} />
        &nbsp;
        <TotalPrice cart={cart} /> 
    </div>
  );
};

export default Main;
