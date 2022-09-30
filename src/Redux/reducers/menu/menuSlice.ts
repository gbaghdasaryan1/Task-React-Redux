import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuState } from "./model";

const initialState: IMenuState = {
  isOpen: true,
};

export const menuSlice = createSlice({
  name: "MENU_SLICE",
  initialState,
  reducers: {
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export default menuSlice.reducer;
