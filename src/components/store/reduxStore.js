import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import addCartSlice from "./addCartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartItems: addCartSlice.reducer,
  },
});

export default store;
