import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/ProductSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});
