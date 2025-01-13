import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishListSlice from "./slices/wishlistSlice"
import cartSlice from './slices/cartSlice'

const cartStore = configureStore({
    reducer: {
        productReducer: productSlice,
        wishlistReducer: wishListSlice,
        cartReducer: cartSlice
    },
})

export default cartStore;