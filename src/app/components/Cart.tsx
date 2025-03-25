// src/app/components/Cart.tsx

import { useCart } from '../store/cartSlice'; // Certifique-se de importar corretamente

const Cart = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Certifique-se de passar increaseQuantity

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.price} - Quantidade: {item.quantity}
              <button onClick={() => increaseQuantity(item.id)}>Aumentar Quantidade</button>
              <button onClick={() => decreaseQuantity(item.id)}>Diminuir Quantidade</button>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
