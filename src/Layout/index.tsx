import Menu from "../Components/Menu";
import ProductList from "../Components/ProductList";
import TopBar from "../Components/TopBar";
import { useAppSelector } from "../hooks/redux.hooks";
import classes from "./Layout.module.scss";

const Layout = () => {
  const { isOpen } = useAppSelector((state) => state.menuReducer);
  return (
    <div className={classes.Layout}>
      <div style={{ width: isOpen ? "15%" : "0" }}>
        <Menu />
      </div>
      <main style={{ width: isOpen ? "83%" : "100%" }}>
        <TopBar />

        <ProductList />
      </main>
    </div>
  );
};

export default Layout;
