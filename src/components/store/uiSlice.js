import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "notifications",
  initialState: {
    notifications: null,
  },
  reducers: {
    notificationActive(state, action) {
      state.notifications = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice;
