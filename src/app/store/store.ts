// src/app/store/store.ts

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Importando o reducer do cartSlice

export const store = configureStore({
  reducer: {
    cart: cartReducer,  // Associando o reducer do cart
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
