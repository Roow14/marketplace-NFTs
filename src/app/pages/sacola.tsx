// src/pages/sacola.tsx
'use client';

import React from 'react';
import { useCart } from '../store/cartSlice';  // Ajuste o caminho do arquivo conforme necessário
import { useRouter } from 'next/navigation';

const Sacola = () => {
  const { cartItems, removeFromCart } = useCart();
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const handleRemove = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div className="cart-page">
      <button onClick={handleBack}>Voltar</button>
      <h1>Sacola</h1>
      {cartItems.length === 0 ? (
        <p>Sua sacola está vazia.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>Preço: {item.price}</p>
              <button onClick={() => handleRemove(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sacola;
