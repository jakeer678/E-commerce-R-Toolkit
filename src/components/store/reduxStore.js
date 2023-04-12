import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import addCartSlice from "./addCartSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartItems: addCartSlice.reducer,
    notification: uiSlice.reducer,
  },
});

export default store;
