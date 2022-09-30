import { IProduct } from "../../../Common/types";

export interface IProductState {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IProductsState {
  products: IProduct[];
  isLoading: boolean;
  hasError: string;
}
