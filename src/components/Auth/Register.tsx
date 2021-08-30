import React, { FC, useState } from 'react';

// Materiaul UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl } from '@material-ui/core';
// styles
import useStyles from './styles';

const Register: FC = () => {
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
        Register
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className={classes.dialogTitle}>Register</DialogTitle>
        <FormControl className={classes.formControl}>
          <TextField
            autoFocus
            label="Name"
            type="text"
            className={classes.field}
          />
          <TextField
            autoFocus
            label="Email"
            type="email"
            className={classes.field}
          />
          <TextField
            autoFocus
            label="Password"
            type="password"
            className={classes.field}
          />
        </FormControl>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Register;
