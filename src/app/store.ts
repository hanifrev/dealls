import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./features/buttonSlice";

const store = configureStore({
  reducer: {
    button: buttonReducer,
  },
});

export default store;
