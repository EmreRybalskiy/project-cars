import React, { FC } from "react";
// Components

// Material UI
import { teal, grey } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    background: teal[400],
    minHeight: "60px",
  },
  footerText: {
    color: grey[50],
  },
});

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography className={classes.footerText}>Footer</Typography>
    </div>
  );
};

export default Footer;
