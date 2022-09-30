import classes from "./App.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppDispatch } from "./hooks/redux.hooks";
import { menuSlice } from "./Redux/reducers/menu/menuSlice";
import Layout from "./Layout";

function App() {
  const { toggleMenu } = menuSlice.actions;
  const dispatch = useAppDispatch();
  return (
    <div className={classes.App}>
      <MenuIcon fontSize='large' sx={{ position: "absolute", top: "10px", left: "10px", cursor: "pointer" }} onClick={() => dispatch(toggleMenu(true))} />
      <Layout />
    </div>
  );
}

export default App;
