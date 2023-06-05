import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProductList from './productList';
import Cart from './Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <h1 className="store-name">Tabuleiro das Trevas</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Produtos</Link>
            </li>
            <li>
              <Link to="/carrinho">Carrinho</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/carrinho" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
