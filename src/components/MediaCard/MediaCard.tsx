import React, { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';

// Material UI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

// styles
import { Cars } from 'types/cars';
import { Box, Button, FormControlLabel } from '@material-ui/core';
import useStyles from './styles';

interface CardProps {
  image: string;
  brand: string;
  color: string;
  year?: string;
  engineType?: string;
  fuelType?: string;
  transmission?: string;
  id?: number;
}

const addFavoriteCard = async (id: number) => {
  const token = JSON.parse(localStorage.getItem('token') as string);
  const userID = JSON.parse(localStorage.getItem('userID') as string);
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

const removeCar = async (id: number) => {
  const token = JSON.parse(localStorage.getItem('token') as string);
  const userID = JSON.parse(localStorage.getItem('userID') as string);
  try {
    const getUser = await axios({
      method: 'get',
      url: `http://localhost:3000/600/users/${userID}`,
    });
    const { favorites } = getUser.data;
    const deletedFavoriteCar = favorites.filter((item: number) => item !== id);
    await axios.patch(`http://localhost:3000/600/users/${userID}`, {
      favorites: [...deletedFavoriteCar],
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    throw Error(e);
  }
};

const deleteCard = async (id?: number) => {
  const token = JSON.parse(localStorage.getItem('token') as string);
  try {
    await axios.delete(`http://localhost:3000/640/cars/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    throw Error(e);
  }
};

const MediaCard: FC<CardProps> = ({
  image, brand, color, year, engineType, fuelType, transmission, id,
}: Cars) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        title="Contemplative Reptile"
        image={image}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Brand:
          {brand}
        </Typography>
        <Typography gutterBottom component="p">
          Color:
          {color}
        </Typography>
        {location.pathname === `/car/${id}` && (
        <>
          {' '}
          <Typography variant="body2" color="textSecondary" component="p">
            Year:
            {year}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Endine Type:
            {engineType}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Fuel Type:
            {fuelType}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Transmission:
            {transmission}
          </Typography>
        </>
        )}
      </CardContent>
      {location.pathname === '/favorites' && <Button onClick={() => removeCar(id as number)} color="secondary">Remove from Favorites</Button>}
      {(location.pathname === '/cars' || location.pathname === '/create' || location.pathname === '/favorites') ? (
        <Box>
          <Link to={{
            pathname: `/car/${id}`,
            state: {
              image, brand, color, year, engineType, fuelType, transmission, id,
            },
          }}
          >
            <Button size="small" color="primary">
              Learn More
            </Button>
          </Link>
        </Box>
      ) : null}
      <Box className={classes.iconHolder}>
        {(location.pathname === `/car/${id}` || location.pathname === '/cars') ? (
          <>
            <FormControlLabel
              onClick={() => addFavoriteCard(id as number)}
              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
              label="Favorite"
            />
          </>
        ) : null}
        {(location.pathname === '/cars' || location.pathname === `/car/${id}`)
        && (
        <CardActions className={classes.card}>
          <DeleteIcon color="secondary" className={classes.icon} onClick={() => deleteCard(id as number)} />
        </CardActions>
        )}
      </Box>
    </Card>
  );
};
export default MediaCard;
