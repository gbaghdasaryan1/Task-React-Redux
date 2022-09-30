import { IProduct, IProductPostBody } from "./../../../Common/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductsState } from "./model";

const initialState: IProductsState = {
  products: [],
  isLoading: false,
  hasError: "",
};

export const productSlice = createSlice({
  name: "PRODUCT_SLICE",
  initialState,
  reducers: {
    productsFetching: (state) => {
      state.isLoading = true;
    },
    productsFetchingSuccess: (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.hasError = "";
      state.products = action.payload;
    },
    productsFetchingErrors: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.hasError = action.payload;
    },
    addProduct: (state, action: PayloadAction<IProductPostBody>) => {
      state.products = [action.payload, ...state.products];
    },
  },
});

export default productSlice.reducer;
