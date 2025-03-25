// src/app/components/ProductCard.tsx
'use client';

import React from 'react';
import { useCart } from '../store/cartSlice';

interface ProductCardProps {
  product: { id: number; name: string; price: string };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Preço: {product.price}</p>
      <button onClick={handleAddToCart}>Adicionar à sacola</button>
    </div>
  );
};

export default ProductCard;
