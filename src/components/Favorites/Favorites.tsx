import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from 'components/MediaCard/MediaCard';
import { Cars } from 'types/cars';

import Loader from 'UI/Loader';
import useStyles from './styles';

const Favorites: FC = () => {
  const classes = useStyles();
  const [userFavorites, setUserFavorites] = useState<[]>([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const [isDeleteFav, setIsDeleteFav] = useState<boolean>(false);

  useEffect(() => {
    showFavorites();
    fetchCars();
  }, []);

  useEffect(() => {
    showFavorites();
  }, [isDeleteFav]);

  const showFavorites = async () => {
    const userID = JSON.parse(sessionStorage.getItem('userID') as string);
    try {
      const getUser = await axios({
        method: 'get',
        url: `http://localhost:3000/users/${userID}`,
      });
      const userFav = getUser.data.favorites;
      setUserFavorites(userFav);
    } catch (e) {
      throw Error(e);
    }
  };

  const deleteCarFromFavorites = async (id: number) => {
    const token = JSON.parse(sessionStorage.getItem('token') as string);
    const userID = JSON.parse(sessionStorage.getItem('userID') as string);
    try {
      const getFavorites = await axios.get(`http://localhost:3000/600/users/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const { favorites } = getFavorites.data;
      const deletedFavoriteCar = favorites.filter((item: number) => item !== id);
      await axios.patch(`http://localhost:3000/600/users/${userID}`, {
        favorites: [...deletedFavoriteCar],
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setIsDeleteFav(true);
    } catch (e) {
      throw Error(e);
    }
    setIsDeleteFav(false);
  };

  const fetchCars = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://localhost:3000/cars',
      });
      setLoading(false);
      setData(response.data);
    } catch (e) {
      setError(e);
    }
  };

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
    <>
      {userFavorites ? (
        <div className={classes.wrapperCars}>
          {data.map((car: Cars) => {
            const fav = userFavorites.filter((el) => car.id === el);
            if (car.id === +fav) {
              return (
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
                  deleteCarFromFavorites={deleteCarFromFavorites}
                />
              );
            }
            return null;
          })}
        </div>
      ) : null}
    </>
  );
};

export default Favorites;
