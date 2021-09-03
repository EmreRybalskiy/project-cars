import React, { FC } from 'react';

// types
import { Cars } from 'types/cars';

// Components
import Loading from '../../UI/Loader';
import MediaCard from '../MediaCard/MediaCard';

// styles
import useStyles from './styles';

interface CardsProps {
  cars: Cars[];
  loading: boolean;
  error: string | null;
}

const Cards: FC<CardsProps> = ({
  cars, loading, error,
}: CardsProps) => {
  const classes = useStyles();

  if (loading) {
    return <h2><Loading /></h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className={classes.holder}>
      {cars.length === 0 && <h2 className={classes.notFound}>Cars not Found</h2>}

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

export default Cards;
