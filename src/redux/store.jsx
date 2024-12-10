import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../redux/productSlice';
import cartSlice from '../redux/cartSlice';
import categoriesSlice from '../redux/categoriesSlice';
import localStorageMiddleware from '../utils/localStorage'; 

const store = configureStore({
    reducer: {
        product: productSlice,
        cart: cartSlice,
        categories:categoriesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;