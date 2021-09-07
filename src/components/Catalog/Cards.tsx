import React, { FC } from 'react';
import axios from 'axios';
// Material UI
import { Cars } from 'types/cars';
import MediaCard from '../MediaCard/MediaCard';

// Comonents
import Loading from '../../UI/Loader';

// types

// styles
import useStyles from './styles';

interface CardsProps {
  cars: Cars[];
  loading: boolean;
  error: string | null;
  setIsDeleteCar: (state: boolean) => void;
}

const Cards: FC<CardsProps> = ({
  cars, loading, error, setIsDeleteCar,
}: CardsProps) => {
  const classes = useStyles();

  if (loading) {
    return <h2><Loading /></h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  const deleteCard = async (id?: number) => {
    const token = JSON.parse(sessionStorage.getItem('token') as string);
    try {
      await axios.delete(`http://localhost:3000/640/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (setIsDeleteCar) {
        setIsDeleteCar(true);
      }
    } catch (e) {
      throw Error(e);
    }
    setIsDeleteCar(false);
  };

  const addFavoriteCard = async (id: number) => {
    const token = JSON.parse(sessionStorage.getItem('token') as string);
    const userID = JSON.parse(sessionStorage.getItem('userID') as string);
    try {
      const getUser = await axios({
        method: 'get',
        url: `http://localhost:3000/600/users/${userID}`,
      });
      const { favorites } = getUser.data;
      const setNewFavorites = [...favorites, id];
      const uniqueArray = setNewFavorites.filter((item: number, pos: number) => (
        setNewFavorites.indexOf(item) === pos
      ));
      await axios.patch(`http://localhost:3000/600/users/${userID}`, {
        favorites: [...uniqueArray],
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (e) {
      throw Error(e);
    }
  };

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
          deleteCard={deleteCard}
          addFavoriteCard={addFavoriteCard}
        />
      ))}
    </div>
  );
};

export default Cards;
