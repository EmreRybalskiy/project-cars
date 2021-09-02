import React, {
  ChangeEvent, FC, useState,
} from 'react';
import axios from 'axios';

import {
  Cars,
} from 'types/cars';

// MaterialUI
import {
  DialogTitle,
  DialogActions,
  Button,
  IconButton,
  FormControl,
  Box,
  // Typography,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
// styles
import useStyles from './styles';

const getDate = () => {
  const today = new Date();
  const date = today.toISOString().split('T')[0];
  return date;
};

const CreateMediaCard: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);

  const [car, setCar] = useState<Cars>({
    image: '',
    brand: '',
    color: '',
    year: '',
    engineType: '',
    fuelType: '',
    transmission: '',
    date: getDate(),
  });

  const isCar = car.image && car.brand
   && car.color && car.year
    && car.engineType && car.fuelType
     && car.transmission;

  const cleaningFields = (): void => {
    setCar({
      image: '',
      brand: '',
      color: '',
      year: '',
      engineType: '',
      fuelType: '',
      transmission: '',
      date: getDate(),
    });
  };

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    cleaningFields();
    setOpen(false);
  };

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
    if (isCar) {
      try {
        await axios.post('http://localhost:3000/cars', car);
      } catch (e) {
        throw Error(e);
      }
    }
    cleaningFields();
    handleClose();
  };
  return (
    <div>
      <IconButton
        className={`${classes.icon} ${classes.iconAddposition}`}
        onClick={() => handleClickOpen()}
      >
        <AddIcon
          color="action"
          className={`${classes.icon} ${classes.iconAdd}`}
        />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        className={classes.cardCreator}
      >
        <Box className={classes.holderDialog}>
          <DialogTitle className={classes.dialogTitle}>
            Create new Car
          </DialogTitle>
          <FormControl className={classes.formControl}>
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

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => createCar()} color="primary">
              Create
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default CreateMediaCard;
