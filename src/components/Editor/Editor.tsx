import React, {
  FC,
  useEffect,
} from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// MaterialUI
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// Components
import Loader from 'UI/Loader';
import fetchCars from 'store/actionCreator/user';
import { Cars } from 'types/cars';
import MediaCard from '../MediaCard/MediaCard';
import CreateMediaCard from '../CreateMediaCard/CreateMediaCard';
// hook
import useTypeSelector from '../hooks/useTypeSelector';
// styles
import useStyles from './styles';
// Types

const Editor: FC = () => {
  const classes = useStyles();
  const { cars, error, loading } = useTypeSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <Container>
      <NavLink to="/">
        <IconButton className={classes.iconBackPosition}>
          <KeyboardBackspaceIcon
            className={`${classes.icon} ${classes.iconBack}`}
          />
        </IconButton>
      </NavLink>
      <CreateMediaCard />
      <div className={classes.holderCards}>
        {cars.map((car: Cars) => (
          <MediaCard
            id={car.id}
            key={car.id}
            image={car.image}
            brand={car.brand}
            color={car.color}
            year={car.year}
            engineType={car.engineType}
            fuelType={car.fuelType}
            transmission={car.transmission}
          />
        ))}
      </div>
    </Container>
  );
};

export default Editor;
