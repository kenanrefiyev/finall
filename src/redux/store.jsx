import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice';
import productSlice from './productSlice';
import currencySlice from './currencySlice';


const store = configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        currency: currencySlice
    }
})

export default store