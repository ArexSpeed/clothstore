import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import favoriteReducer from '../features/favorite/favoriteSlice';
import sidebarReducer from '../features/sidebar/sidebarSlice';
import productsReducer from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    favorite: favoriteReducer,
    sidebar: sidebarReducer,
    products: productsReducer
  },
});
