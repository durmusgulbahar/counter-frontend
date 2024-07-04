'use client'
import React from "react";
import styles from "@/app/styles/Button.module.css";
import Button from "@mui/material/Button";
import AlertDialog from "./Dialog";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
type Props = {
  label: string;
};

export default function ButtonComponent(props: Props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
   <div>
     <Button variant="contained"onClick={
      () => {
     
       handleClickOpen();
      }
    
    }>
      {props.label}
    </Button>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure you want to ${props.label.toLowerCase()}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You will start a bunch of process in the backend just for increase this unnecessary value by 1. There will not
            any changes in your life after this action. Are you sure you want to continue?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
   </div>
  );
}
