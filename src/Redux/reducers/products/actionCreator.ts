import axios from "axios";
import { IProduct } from "../../../Common/types";
import { AppDispatch } from "./../../store";
import { productSlice } from "./productSlice";

export const fetchProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(productSlice.actions.productsFetching());
    const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products");
    dispatch(productSlice.actions.productsFetchingSuccess(response.data));
  } catch (e: unknown) {
    if (e instanceof Error) {
      dispatch(productSlice.actions.productsFetchingErrors(e.message));
    } else {
      console.log(e);
    }
  }
};
