import classes from "./ProductList.module.scss";
import { ProductListProps } from "./ProductList.props";
import Checkbox from "@mui/material/Checkbox";
import ProductItem from "../ProductItem";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import { useEffect } from "react";
import { fetchProducts } from "../../Redux/reducers/products/actionCreator";

const ProductList = ({ className, ...props }: ProductListProps) => {
  const { isLoading, products } = useAppSelector((state) => state.productReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  console.log(products);

  return (
    <div className={classes.ProductList} {...props}>
      <div className={classes.Header}>
        <div>
          <Checkbox sx={{ color: "white" }} />
        </div>
        <div>title</div>
        <div>description</div>
        <div>category</div>
        <div>price</div>
        <div>image</div>
        <div>rate</div>
        <div>count</div>
        <div>id</div>
        <div></div>
      </div>

      <div className={classes.List}>
        {products?.map((product) => {
          return <ProductItem key={product.id} category={product.category} title={product.title} price={product.price} description={product.description} image={product.image} rating={product?.rating} id={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
