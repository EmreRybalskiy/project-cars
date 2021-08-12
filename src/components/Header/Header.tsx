import React, { FC, useState, MouseEvent } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// Material UI
import {
  AppBar,
  Box,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// Components
import Register from '../Auth/Register';
import Login from '../Auth/Login';
// Styles
import useStyles from './styles';

const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);

  const location = useLocation();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.navMenu}>
        <Typography variant="h4">Catalog</Typography>
        <Box>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            style={{ left: -80, top: -2 }}
          >
            {' '}
            <NavLink
              to="/editor"
              className={`${classes.link} ${classes.hover}`}
            >
              {location.pathname !== '/editor' && (
                <MenuItem onClick={handleClose}>Editor</MenuItem>
              )}
            </NavLink>
            <MenuItem
              onClick={handleClose}
              className={`${classes.link} ${classes.hover}`}
            >
              Logout
            </MenuItem>
          </Menu>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Login />
          <Register />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
