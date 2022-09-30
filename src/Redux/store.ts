import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducers/menu/menuSlice";
import productReducer from "./reducers/products/productSlice";
import dialogReducer from "./reducers/dialog/dialogSlice";

const rootReducer = combineReducers({
  menuReducer,
  productReducer,
  dialogReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
