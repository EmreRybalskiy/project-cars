import React, { FC } from 'react';
import { Cars } from 'types/cars';
import Loading from '../../UI/Loader';
import useStyles from './styles';
import MediaCard from '../MediaCard/MediaCard';

interface CardsProps {
  cars: Cars[];
  loading: boolean;
  error: string | null;
}

const Cards: FC<CardsProps> = ({ cars, loading, error }: CardsProps) => {
  const classes = useStyles();
  if (loading) {
    return <h2><Loading /></h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
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

export default Cards;
