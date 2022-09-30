import classes from "./ProductItem.module.scss";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import { ProductItemProps } from "./ProductItem.props";
const ProductItem = ({ category, description, id = 0, image, price, rating, title, checked = false }: ProductItemProps) => {
  return (
    <div className={classes.ProductItem}>
      <div>
        <Checkbox />
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{category}</div>
      <div>{price}</div>
      <div>
        <img src={image} alt='' />
      </div>
      <div>{rating?.rate}</div>
      <div>{rating?.count}</div>
      <div>{id}</div>
      <div>
        <EditIcon sx={{ color: "#6454CE", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default ProductItem;
