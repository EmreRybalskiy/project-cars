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

const MediaPage: FC = (props) => {
  console.log(props);
  const classes = useStyles();
  const { cars, loading, error } = useTypeSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className={classes.holder}>
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
  );
};

export default MediaPage;
