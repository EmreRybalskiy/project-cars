import React, { FC } from 'react';

// Material UI
import { Typography } from '@material-ui/core';
// Styles
import useStyles from './styles';

const Footer: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>

      <Typography className={classes.footerText}>Footer</Typography>
    </div>
  );
};

export default Footer;
