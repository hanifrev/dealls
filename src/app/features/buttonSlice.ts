import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeButton1: true,
  activeButton2: false,
};

export const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    productBtn(state) {
      state.activeButton1 = true;
      state.activeButton2 = false;
    },
    cartBtn(state) {
      state.activeButton2 = true;
      state.activeButton1 = false;
    },
  },
});

export const { productBtn, cartBtn } = buttonSlice.actions;
export default buttonSlice.reducer;
