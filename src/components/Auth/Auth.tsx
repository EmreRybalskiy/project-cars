import React, { FC, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import { grey, teal, indigo } from "@material-ui/core/colors";
import { FormControl } from "@material-ui/core";

const useStyles = makeStyles({
  loginBtn: {
    color: grey[100],
  },
  dialogTitle: {
    textAlign: "center",
    color: indigo[600],
  },
  formControl: {
    width: 500,
    height: 200,
    textAlign: "center",
  },
  field: {
    margin: "20px auto",
    width: "80%",
    color: teal[400],
  },
});

const FormDialog: FC = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen} className={classes.loginBtn}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className={classes.dialogTitle}>Form</DialogTitle>
        <FormControl className={classes.formControl}>
          <TextField
            autoFocus
            label="Email"
            type="Email"
            className={classes.field}
          />
          <TextField
            autoFocus
            label="Password"
            type="Password"
            className={classes.field}
          />
        </FormControl>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
