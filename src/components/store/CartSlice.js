import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    cartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
      console.log(state, "oooooooo");
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
