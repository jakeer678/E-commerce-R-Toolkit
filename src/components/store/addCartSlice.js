import { createSlice } from "@reduxjs/toolkit";

const addCartSlice = createSlice({
  name: "cartItems",
  initialState: { items: [], totalQauntity: 0 },
  reducers: {
    addToCart(state, action) {
      //   state.items = [...state.action.payload];
      //  const item = state.items.push(action.payload);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQauntity++;
      if (!existingItem) {
        //  state.items.push({...action.payload,qauntity:1})
        state.items.push({
          itemId: newItem.id,
          title: newItem.title,
          description: newItem.description,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeCartItems(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQauntity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const addCartSliceActions = addCartSlice.actions;
export default addCartSlice;
