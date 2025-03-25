// src/app/store/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';

// Defina o tipo de um item do carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Estado inicial do carrinho
interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((cartItem) => cartItem.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Exporte as actions
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;

// Exporta o reducer
export default cartSlice.reducer;

// Hook personalizado para acessar o carrinho
export const useCart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  return {
    cartItems,
    addToCart: (item: CartItem) => dispatch(addToCart(item)),
    removeFromCart: (id: number) => dispatch(removeFromCart(id)),
    increaseQuantity: (id: number) => dispatch(increaseQuantity(id)),
    decreaseQuantity: (id: number) => dispatch(decreaseQuantity(id)),
    clearCart: () => dispatch(clearCart()),
  };
};
