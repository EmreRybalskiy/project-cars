import React, { FC } from 'react';
import MediaCard from 'components/MediaCard/MediaCard';
import { NavLink } from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import IconButton from '@material-ui/core/IconButton';

import useStyles from './styles';

const MediaPage: FC = ({ location: { state } }: any) => {
  const classes = useStyles();
  return (
    <>
      <NavLink to="/cars">
        <IconButton className={classes.iconBackPosition}>
          <KeyboardBackspaceIcon
            className={`${classes.icon} ${classes.iconBack}`}
          />
        </IconButton>
      </NavLink>
      <MediaCard
        id={state.id}
        key={state.id}
        image={state.image}
        brand={state.brand}
        color={state.color}
        year={state.year}
        engineType={state.engineType}
        fuelType={state.fuelType}
        transmission={state.transmission}
      />
    </>
  );
};

export default MediaPage;
