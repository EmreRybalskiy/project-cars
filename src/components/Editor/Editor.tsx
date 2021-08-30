import React, {
  FC,
  useEffect,
  useState,
} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

// MaterialUI
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
// Components
import Loader from 'UI/Loader';
import { Cars } from 'types/cars';
import MediaCard from '../MediaCard/MediaCard';
import CreateMediaCard from '../CreateMediaCard/CreateMediaCard';
// styles
import useStyles from './styles';
// Types

const Editor: FC = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
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
    fetchCars();
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
        {data.map((car: Cars) => (
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
