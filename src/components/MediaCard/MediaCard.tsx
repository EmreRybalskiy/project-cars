import React, { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';

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
  deleteCard?: (id: number) => void;
  deleteCarFromFavorites?: (id: number) => void;
  addFavoriteCard?: (id: number) => void;
}

const MediaCard: FC<CardProps> = ({
  image, brand, color, year, engineType, fuelType, transmission, id,
  deleteCard, deleteCarFromFavorites, addFavoriteCard,
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
          <strong className={classes.categoryName}>Brand:</strong>
          <span className={classes.text}>
            {brand}
          </span>
        </Typography>
        <Typography gutterBottom component="p">
          <strong className={classes.categoryName}>Color:</strong>
          <span className={classes.text}>{color}</span>
        </Typography>
        {location.pathname === `/car/${id}` && (
        <>
          {' '}
          <Typography variant="body2" component="p">
            <strong className={classes.categoryName}>Year:</strong>
            <span className={classes.text}>{year}</span>
          </Typography>
          <Typography variant="body2" component="p">
            <strong className={classes.categoryName}>Endine Type:</strong>
            <span className={classes.text}>{engineType}</span>
          </Typography>
          <Typography variant="body2" component="p">
            <strong className={classes.categoryName}>Fuel Type:</strong>
            <span className={classes.text}>{fuelType}</span>
          </Typography>
          <Typography variant="body2" component="p">
            <strong className={classes.categoryName}>Transmission:</strong>
            <span className={classes.text}>{transmission}</span>
          </Typography>
        </>
        )}
      </CardContent>
      {location.pathname === '/favorites' && <Button onClick={() => deleteCarFromFavorites !== undefined && deleteCarFromFavorites(id as number)} color="secondary">Remove from Favorites</Button>}
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
              onClick={() => addFavoriteCard !== undefined && addFavoriteCard(id as number)}
              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
              label="Favorite"
            />
          </>
        ) : null}
        {(location.pathname === '/cars' || location.pathname === `/car/${id}`)
        && (
        <CardActions>
          <DeleteIcon color="secondary" className={classes.icon} onClick={() => deleteCard?.(id as number)} />
        </CardActions>
        )}
      </Box>
    </Card>
  );
};
export default MediaCard;
