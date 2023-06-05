import React from 'react';
import './productList.css';
import './cart.css';

const products = [
  {
    id: 1,
    name: 'Legião dos Pesadelos',
    description: 'Libere os horrores do abismo com a Legião dos Pesadelos. Essas entidades distorcidas, nascidas das profundezas da escuridão, incorporam seus piores medos. Sua mera presença invoca um sentimento de pavor, enquanto consomem a luz e semeiam o caos por onde passam.',
    price: 10,
    image: 'first-card.jpg',
  },
  {
    id: 2,
    name: 'Abominação Etérea',
    description: 'Contemple a Abominação Etérea, uma monstruosidade cósmica que desafia a compreensão. Ela existe além dos limites da sanidade, sua forma se transformando e distorcendo de maneiras inimagináveis. Com seus poderes além deste mundo, ela pode curvar a realidade em prol de seus desejos.',
    price: 20,
    image: 'second-card.jpg',
  },
  {
    id: 3,
    name: 'Sombras Sussurrantes',
    description: 'Adentre o reino das Sombras Sussurrantes, onde a escuridão toma uma forma tangível. Essas entidades sombrias espreitam nos cantos da existência, sussurrando segredos malevolentes e caçando almas desprevenidas. Seu toque traz um frio arrepiante que penetra nos ossos.',
    price: 30,
    image: 'third-card.jpg',
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p id={`price-${product.id}`} className="price">Preço: R${product.price}</p>
          <img src={product.image} alt={product.name} />
          <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
