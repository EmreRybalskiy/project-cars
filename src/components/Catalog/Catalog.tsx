import React, {
  FC,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';

// Components
import fetchCars from 'store/actionCreator/cars';
import { Cars } from 'types/cars';
import Loading from '../../UI/Loader';
import MediaCard from '../MediaCard/MediaCard';

// hook
import useTypeSelector from '../hooks/useTypeSelector';
// Styles
import useStyles from './styles';

const Catalog: FC = () => {
  const classes = useStyles();
  const state = useTypeSelector((state) => state);
  console.log(state.cars.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  if (state.cars.loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (state.cars.error) {
    return <p>Error</p>;
  }

  return (
    <div className={classes.holder}>
      {state.cars.cars.map((car: Cars) => (
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
  );
};

export default Catalog;
