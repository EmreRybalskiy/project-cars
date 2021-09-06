import React, {
  ChangeEvent, FC, useState,
} from 'react';
import axios from 'axios';

import {
  Cars,
} from 'types/cars';

// MaterialUI
import {
  Button,
  FormControl,
  Box,
  Typography,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
// styles
import useStyles from './styles';

export const getDate = () : string => {
  const today = new Date();
  const date = today.toISOString().split('T')[0];
  return date;
};

const CreateCards: FC = () => {
  const classes = useStyles();

  const [car, setCar] = useState<Cars>({
    image: '',
    brand: '',
    color: '',
    year: '',
    engineType: '',
    fuelType: '',
    transmission: '',
    userId: 1,
    date: getDate(),
  });

  const handleChangeDataCar = ({ target } : ChangeEvent<HTMLInputElement>): void => {
    setCar((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const upLoadImage = ({ target } : ChangeEvent<HTMLInputElement>): void => {
    if (target.files !== null && target.files.length !== 0) {
      const file = URL.createObjectURL(target.files[0]);
      setCar((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };
  const createCar = async () => {
    try {
      await axios.post('http://localhost:3000/cars', car);
    } catch (e) {
      throw Error(e);
    }
  };
  return (
    <div className={classes.holderCards}>
      <Box className={classes.formWrapper}>
        <Typography className={classes.heading}>
          Create new Car
        </Typography>
        <FormControl>
          <TextField
            autoFocus
            label="Brand"
            name="brand"
            type="text"
            className={classes.field}
            onChange={handleChangeDataCar}
          />
          <TextField
            autoFocus
            label="Color"
            name="color"
            type="text"
            className={classes.field}
            onChange={handleChangeDataCar}
          />
          <TextField
            autoFocus
            label="Year"
            name="year"
            type="text"
            className={classes.field}
            onChange={handleChangeDataCar}
          />
          <TextField
            autoFocus
            label="Engine Type"
            name="engineType"
            type="text"
            className={classes.field}
            onChange={handleChangeDataCar}
          />
          <TextField
            autoFocus
            label="Fuel Type"
            name="fuelType"
            type="text"
            className={classes.field}
            onChange={handleChangeDataCar}
          />
          <TextField
            autoFocus
            label="Transmission"
            name="transmission"
            type="text"
            className={classes.field}
            onChange={handleChangeDataCar}
          />
          <Box className={classes.upload}>
            <Button
              variant="contained"
              component="label"
            >
              Upload File
              <input
                type="file"
                name="image"
                hidden
                onChange={upLoadImage}
              />
            </Button>
          </Box>
        </FormControl>

        <Button onClick={() => createCar()} color="primary" className={classes.createBtn}>
          Create
        </Button>
      </Box>
    </div>
  );
};

export default CreateCards;
