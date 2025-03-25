"use client";

import React, { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useCart } from "./store/cartSlice"; // Corrigido o caminho para o import
import "../styles/globals.css";

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
}

const Home = () => {
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const { data, error, isLoading } = useProducts();
  const {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!Array.isArray(data)) return <div>Data is not an array!</div>;

  const handleAddToCart = (product: Product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      increaseQuantity(product.id);
    } else {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const handleLoadMore = () => setVisibleCount((prev) => prev + 8);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => setIsModalOpen(false);

  // Calculando o valor total do carrinho
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      return total + itemPrice * item.quantity;
    }, 0);
  };

  return (
    <div className="container">
      {/* Menu e Ícone de Sacola */}
      <div className="menu">
        <img src="/img/logo.png" alt="Logo" className="logo" />
        <div className="menu-right">
          <div className="icon-container" style={{ position: "relative" }}>
            <img
              src="/img/bag.png"
              alt="Sacola"
              className="eth-icon"
              style={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
              }}
              onClick={handleOpenModal}
            />
            <span
              className="product-count"
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                color: "white",
                borderRadius: "50%",
                padding: "5px",
                fontSize: "12px",
              }}
            >
              {cartItems.length}
            </span>
          </div>
        </div>
      </div>

      {/* Lista de Produtos */}
      <div className="card-container">
        {data.slice(0, visibleCount).map((product: Product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="price">
              <img src="/img/icon.png" alt="Icon" className="eth-icon" />
              {product.price} ETH
            </div>
            <button onClick={() => handleAddToCart(product)}>COMPRAR</button>
          </div>
        ))}
      </div>

      {/* Botão "Carregar Mais" */}
      {visibleCount < data.length && (
        <div className="load-more-container">
          <button className="load-more" onClick={handleLoadMore}>
            Carregar mais
          </button>
        </div>
      )}

      {/* Modal da Sacola */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="back-button"
              onClick={handleCloseModal}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
                position: "absolute",
                top: "20px",
                left: "20px",
              }}
            >
              <img
                src="/img/Back.png"
                alt="Voltar"
                style={{ width: "60px", height: "60px",position:"relative",
                  top:"-20px", left:"-20%", }}
              />
            </button>
            <h2 className="modal-title">Mochila de Compras</h2>

            {cartItems.length === 0 ? (
              <p style={{ marginTop: "20px" }}>Sua sacola está vazia.</p>
            ) : (
              <div className="cart-items" style={{ padding: "20px" }}>
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="cart-item"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "15px",
                      padding: "10px",
                      borderRadius: "8px",
                      background: "#282828",
                    }}
                  >
                    {/* Imagem do Item na Sacola */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                      style={{ width: "161px",
                         height: "161px",
                         }}
                    />
                    <div style={{ flex: 1, marginLeft: "20px" }}>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <div
                        className="price"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <img src="/img/icon.png" alt="ETH Icon" className="eth-icon" />
                        {item.price} ETH
                      </div>

                      {/* Contador de Quantidade */}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "10px",
                          width: "115px",
                          height: "49px",
                          borderRadius: "8px",
                          padding: "12px 8px",
                          gap: "10px",
                          background: "#232323",
                        }}
                      >
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          style={{
                            cursor: "pointer",
                            width: "99px",
                            height: "20px",
                            backgroundColor: "#232323",
                            border: "none",
                            textAlign: "center",
                            position: "relative",
                            left: "-9px",
                            top: "-20px",
                          }}
                        >
                          -
                        </button>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          style={{
                            cursor: "pointer",
                            width: "99px",
                            height: "20px",
                            backgroundColor: "#232323",
                            border: "none",
                            position: "relative",
                            left: "-21px",
                            top: "-18px",
                          }}
                        >
                          +
                        </button>
                        {/* Centralizando o número do contador */}
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "30px",
                            height: "20px",
                            
                            color: "white",
                            borderRadius: "4px",
                            position: "relative",
                            right: "96px",
                          }}
                        >
                          {item.quantity}
                        </span>
                      </div>
                    </div>

                    {/* Botão de Remover */}
                    <img
                      src="/img/delete.png"
                      alt="Remover"
                      style={{
                        width: "43px",
                        cursor: "pointer",
                        background: "#FF8310",
                        height: "43px",
                        position: "relative",
                        top: "75px",
                        padding: "7px",
                        borderRadius: "50%",
                      }}
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Exibindo Título Total e Valor */}
<div
  style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  }}
>
  <span>Total</span>
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src="/img/icon.png"  // Coloque o caminho correto do seu ícone aqui
      alt="Icon"
      style={{ width: "34px", height: "34px", marginRight: "8px" }}
    />
    <span>{getTotalPrice()} ETH</span>
  </div>
</div>

{/* Botão "Finalizar Compra" */}
<button
  className="finish-purchase"
  onClick={() => {
    // Lógica para finalizar a compra
    alert("Compra finalizada com sucesso!");
    // Limpar o carrinho (opcional)
    cartItems.forEach((item) => removeFromCart(item.id));
    setIsModalOpen(false); // Fechar o modal após finalizar a compra
  }}
  style={{
    width: "100%",
    padding: "12px",
    backgroundColor: "#FF8310",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  }}
>
  Finalizar Compra
</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Home;