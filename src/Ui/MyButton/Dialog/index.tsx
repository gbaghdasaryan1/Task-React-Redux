import Dialog from "@mui/material/Dialog";
import { dialogSlice } from "../../../Redux/reducers/dialog/dialogSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux.hooks";
import { DialogProps } from "./Dialog.props";

const AlertDialog = ({ children }: DialogProps) => {
  const { toggleDialog } = dialogSlice.actions;
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.dialogReducer);
  return (
    <div>
      <Dialog open={isOpen} onClose={() => dispatch(toggleDialog(false))} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        {children}
      </Dialog>
    </div>
  );
};

export default AlertDialog;
