import React, { useEffect, useState } from 'react';
import './cart.css';

const Cart = ({ cartItems, setCartItems }) => {
  useEffect(() => {
    const cartItemsFromStorage = localStorage.getItem('cartItems');
    if (cartItemsFromStorage) {
      setCartItems(JSON.parse(cartItemsFromStorage));
    }
  }, [setCartItems]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const incrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (productId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Preço: R${item.price}</p>
              <p>Quantidade: {item.quantity}</p>
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Remover do Carrinho</button>
            </div>
          ))}
          <p>Total: R${getTotalPrice()}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
