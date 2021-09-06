import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

// Material UI
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@material-ui/core';
// Components
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';

// Styles
import useStyles from './styles';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.navMenu}>
        <NavLink to="/cars" className={classes.navLogo}><Typography variant="h4">Catalog</Typography></NavLink>
        <Box className={classes.authMenu}>
          <SignIn />
          <SignUp />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
