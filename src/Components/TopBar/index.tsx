import classes from "./TopBar.module.scss";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import PublishIcon from "@mui/icons-material/Publish";
import MyButton from "../../Ui/MyButton";
import Filter from "../Filter";
import { dialogSlice } from "../../Redux/reducers/dialog/dialogSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import AlertDialog from "../../Ui/MyButton/Dialog";
import { Button, DialogActions, DialogTitle } from "@mui/material";
import { useState } from "react";
import { IProductPostBody } from "../../Common/types";
import axios from "axios";
import { productSlice } from "../../Redux/reducers/products/productSlice";

const TopBar = () => {
  const { toggleDialog } = dialogSlice.actions;
  const { addProduct } = productSlice.actions;
  const dispatch = useAppDispatch();
  // const { isOpen } = useAppSelector((state) => state.dialogReducer);
  const { products } = useAppSelector((state) => state.productReducer);
  const [newProduct, setNewProduct] = useState<IProductPostBody>({
    category: "",
    description: "",
    title: "",
    image: "",
    price: 0,
    rating: {
      rate: 44,
      count: 455,
    },
  });

  console.log(products);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onClose = () => {
    dispatch(toggleDialog(false));
    setNewProduct({
      category: "",
      description: "",
      title: "",
      image: "",
      price: 0,
      rating: {
        rate: 44,
        count: 455,
      },
    });
  };

  const onCreateProduct = async () => {
    await axios.post("https://fakestoreapi.com/products", newProduct);
    dispatch(addProduct(newProduct));
  };

  return (
    <div className={classes.TopBar}>
      <AlertDialog>
        <DialogTitle id='alert-dialog-title'>Create new product</DialogTitle>
        <div className={classes.DialogContent}>
          <input type='text' name='title' value={newProduct.title} placeholder='title' onChange={onChangeHandler} />
          <br />
          <input type='text' name='category' value={newProduct.category} placeholder='category' onChange={onChangeHandler} />
          <br />
          <input type='text' name='description' value={newProduct.description} placeholder='description' onChange={onChangeHandler} />
          <br />
          <input type='text' name='image' value={newProduct.image} placeholder='image' onChange={onChangeHandler} />
          <br />
          <input type='text' name='price' value={newProduct.price} placeholder='price' onChange={onChangeHandler} />
        </div>
        <DialogActions>
          <Button onClick={onClose}>Disagree</Button>
          <Button onClick={onCreateProduct} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </AlertDialog>
      <div>
        <Avatar />
      </div>

      <div className={classes.Actions}>
        <Filter />

        <div>
          <MyButton title='Create' icon={<AddIcon />} primary onClick={() => dispatch(toggleDialog(true))} />
          <MyButton title='Import' icon={<PublishIcon />} />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
