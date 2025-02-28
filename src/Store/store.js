import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice"
import ProductSlice from "./ProductSlice"
import AuthSlice from "./AuthSlice"
const store = configureStore({
    reducer: {
        cart: CartSlice,
        product: ProductSlice,
        auth: AuthSlice
    }
})
export default store 