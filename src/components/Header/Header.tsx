import React, { FC, useState, MouseEvent } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Components
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
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { grey, teal } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Register from "../Auth/Register";
import Login from "../Auth/Login";

const useStyles = makeStyles({
  navMenu: {
    display: "flex",
    justifyContent: "space-between",
    background: teal[400],
  },
  link: {
    fontSize: 15,
    textDecoration: "none",
    color: grey[900],
  },
  hover: {
    "&:hover": {
      color: teal[400],
    },
  },
});

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
        <Typography variant="h4">Cars</Typography>
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
            {" "}
            <NavLink
              to="/editor"
              className={`${classes.link} ${classes.hover}`}
            >
              {location.pathname !== "/editor" && (
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
