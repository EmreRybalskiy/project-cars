import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

// Material Ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
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
      url: `http://localhost:3000/users/${userID}`,
    });
    const { favorites } = getUser.data;
    const setNewFavorites = [...favorites, id];
    const uniqueArray = setNewFavorites.filter((item: number, pos: number) => (
      setNewFavorites.indexOf(item) === pos
    ));
    await axios.patch(`http://localhost:3000/users/${userID}`, {
      favorites: [...uniqueArray],
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

const removeCar = async (id: number) => {
  const token = JSON.parse(localStorage.getItem('token') as string);
  const userID = JSON.parse(localStorage.getItem('userID') as string);
  try {
    const getUser = await axios({
      method: 'get',
      url: `http://localhost:3000/users/${userID}`,
    });
    const { favorites } = getUser.data;
    const deletedFavoriteCar = favorites.filter((item: number) => item !== id);
    console.log(deletedFavoriteCar);
    await axios.patch(`http://localhost:3000/users/${userID}`, {
      favorites: [...deletedFavoriteCar],
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
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
      </CardContent>
      {location.pathname === '/favorites' && <Button onClick={() => removeCar(id as number)} color="secondary">Remove from Favorites</Button>}
      {(location.pathname === '/' || location.pathname === '/editor') ? (
        <Box className={classes.cardFooter}>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <FormControlLabel
            onClick={() => addFavoriteCard(id as number)}
            control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
            label="Favorite"
          />
        </Box>
      ) : null}
      {location.pathname === '/editor' && (
        <CardActions className={classes.iconHolder}>
          <IconButton className={classes.icon}>
            <EditIcon color="primary" className={classes.icon} />
          </IconButton>
          <IconButton className={classes.icon}>
            <DeleteIcon color="secondary" className={classes.icon} />
          </IconButton>
        </CardActions>
      )}
    </Card>
  );
};
export default MediaCard;
