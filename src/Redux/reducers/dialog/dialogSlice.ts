import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDialogState } from "./model";

const initialState: IDialogState = {
  isOpen: true,
};

export const dialogSlice = createSlice({
  name: "DIALOG_SLICE",
  initialState,
  reducers: {
    toggleDialog: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export default dialogSlice.reducer;
