import React, {
  FC, useState,
  ChangeEvent,
} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

// Materiaul UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl } from '@material-ui/core';
// styles
import { Users } from 'types/user';
import { emailValidation, passwordValidation } from './validation';
import useStyles from './styles';

const SignUp: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const [userName, setName] = useState<string>('');
  const [userEmail, setEmail] = useState<string>('');
  const [userPassword, setPassword] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const newUser: Users = {
    name: userName,
    email: userEmail,
    password: userPassword,
    favorites: [],
  };
  const cleaningFields = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleClickOpenSignUp = () => {
    setOpen(true);
    cleaningFields();
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const nameHandler = ({ target } :ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
    if (target.value.length < 3) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const emailHandler = ({ target } :ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value);
    if (!emailValidation.test(String(target.value).toLowerCase())) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const passwordHandler = ({ target } : ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value);
    if (!passwordValidation.test(target.value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const checkOnValidation = () => {
    if (emailError === false && nameError === false && passwordError === false) {
      setData();
    }
    handleClickClose();
  };

  const setData = async () => {
    try {
      await axios.post('http://localhost:3000/register', newUser);
    } catch (e) {
      throw Error(e);
    }
  };

  return (
    <>
      <Button onClick={handleClickOpenSignUp}>
        <NavLink to="/signup" className={classes.navItem}>Sign Up</NavLink>
      </Button>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle className={classes.dialogTitle}>Register</DialogTitle>
        <FormControl className={classes.formControl}>
          { nameError && <div className={classes.notValidField}>Name not correct</div>}
          <TextField
            autoFocus
            label="Name"
            name="name"
            type="text"
            className={classes.field}
            value={userName}
            onChange={nameHandler}
          />
          {emailError && <div className={classes.notValidField}>Email not correct</div>}
          <TextField
            autoFocus
            label="Email"
            name="email"
            type="email"
            className={classes.field}
            value={userEmail}
            onChange={emailHandler}
          />
          {passwordError && <div className={classes.notValidField}>Password not correct</div>}
          <TextField
            autoFocus
            label="Password"
            name="password"
            type="password"
            className={classes.field}
            value={userPassword}
            onChange={passwordHandler}
          />
        </FormControl>
        <DialogActions className={classes.formFooter}>
          <NavLink to="/" onClick={handleClickClose} className={classes.navBtnBack}>Go back</NavLink>
          <Button onClick={() => checkOnValidation()} color="primary">
            SignUp
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SignUp;
