import classes from "./Menu.module.scss";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.hooks";
import { menuSlice } from "../../Redux/reducers/menu/menuSlice";

import Drawer from "@mui/material/Drawer";
import { Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TableBarIcon from "@mui/icons-material/TableBar";
import StarIcon from "@mui/icons-material/Star";
import ListIcon from "@mui/icons-material/List";
import BallotIcon from "@mui/icons-material/Ballot";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import TabletAndroidIcon from "@mui/icons-material/TabletAndroid";
import BoyIcon from "@mui/icons-material/Boy";
import GirlIcon from "@mui/icons-material/Girl";
import RestaurantIcon from "@mui/icons-material/Restaurant";

const Menu = () => {
  const { isOpen } = useAppSelector((state) => state.menuReducer);
  const { toggleMenu } = menuSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className={classes.Drawer}>
      <Drawer open={isOpen} onClose={() => dispatch(toggleMenu(false))} onKeyDown={() => dispatch(toggleMenu(false))} hideBackdrop variant='persistent'>
        <div className={classes.MenuContent}>
          <div className={classes.Avatar}>
            <Avatar alt='' src='' sx={{ width: 120, height: 120 }} />
            <div className={classes.EditBtn}>
              <IconButton aria-label='upload picture' component='label'>
                <input hidden accept='image/*' type='file' />
                <EditIcon fontSize='small' sx={{ color: "black" }} />
              </IconButton>
            </div>
          </div>

          <div className={classes.CloseMenu}>
            <ArrowBackIcon sx={{ color: "white", cursor: "pointer" }} onClick={() => dispatch(toggleMenu(false))} />
          </div>

          <nav>
            <NavLink to='#'>
              <DashboardIcon />
              Dashboard
            </NavLink>
            <NavLink to='#'>
              <AttachMoneyIcon />
              Orders
            </NavLink>
            <NavLink to='#'>
              <TableBarIcon />
              Tables
            </NavLink>
            <NavLink to='#'>
              <StarIcon />
              Top Products
            </NavLink>
            <NavLink to='#'>
              <RestaurantIcon />
              Products
            </NavLink>
            <NavLink to='#'>
              <ListIcon />
              Categories
            </NavLink>
            <NavLink to='#'>
              <BallotIcon />
              Sub Categories
            </NavLink>
            <NavLink to='#'>
              <WarehouseIcon />
              Stokc
            </NavLink>
            <NavLink to='#'>
              <TabletAndroidIcon />
              Pads
            </NavLink>
            <NavLink to='#'>
              <BoyIcon sx={{ margin: "0", padding: "0" }} viewBox='0 0 24 24' />
              <GirlIcon viewBox='8 0 24 24' />
              Dashboard
            </NavLink>
          </nav>
        </div>
      </Drawer>
    </div>
  );
};

export default Menu;
