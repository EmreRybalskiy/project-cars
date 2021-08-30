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
import useStyles from './styles';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.navMenu}>
        <Typography variant="h4" className={classes.navLogo}>Catalog</Typography>
        <Box className={classes.authMenu}>
          <SignIn />
          <SignUp />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
