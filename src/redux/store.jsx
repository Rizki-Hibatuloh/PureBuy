import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../redux/productSlice';
import cartSlice from '../redux/cartSlice';
import categoriesSlice from '../redux/categoriesSlice';

const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
        categories:categoriesSlice
    },
});

export default store;