import { combineReducers, configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./features/buttonSlice";
import { api } from "./services/api";

const rootReducer = combineReducers({
  button: buttonReducer,
  [api.reducerPath]: api.reducer,
});

export default configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
