import React, { FC } from 'react';

// Material UI
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@material-ui/core';
// Components

// Styles
import { NavLink } from 'react-router-dom';
import useStyles from './styles';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.navMenu}>
        <NavLink to="/" className={classes.navLogo}><Typography variant="h4">Catalog</Typography></NavLink>
        <Box className={classes.authMenu}>
          <SignIn />
          <SignUp />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
