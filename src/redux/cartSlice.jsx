import { createSlice } from '@reduxjs/toolkit';

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = {
  products: loadCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        state.products.push(product);
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((item) => item.id !== productId);
    },
    clearCart: (state) => {
      state.products = [];
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingProduct = state.products.find((item) => item.id === productId);
      if (existingProduct) {
        existingProduct.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
