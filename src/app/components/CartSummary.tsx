// src/components/CartSummary.tsx
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const CartSummary = () => {
  // Calcula o total de itens e o valor total
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalValue = cartItems.reduce((total, item) => total + item.quantity * parseFloat(item.price), 0);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h3>Total de Itens: {totalItems}</h3>
      <h3>Valor Total: R$ {totalValue.toFixed(2)}</h3>
    </div>
  );
};

export default CartSummary;
