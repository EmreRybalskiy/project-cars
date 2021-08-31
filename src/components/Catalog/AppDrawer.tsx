import React, { ChangeEvent, FC } from 'react';
import Drawer from '@material-ui/core/Drawer/Drawer';
import TextField from '@material-ui/core/TextField';
import {
  FormControl, InputLabel, Select, Typography,
} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button/Button';
import useStyles from './styles';

interface AppDrawerProps {
  isDrawer: boolean;
  typeCar: string | undefined;
  setIsDrawer: (isDrawer: boolean) => void;
  setTypeCar: (type: string) => void;
  setBrand: (type: string) => void;
  handleAccept: () => void;
  handleReset: () => void;
}

const AppDrawer: FC<AppDrawerProps> = ({
  isDrawer, typeCar, setIsDrawer, setTypeCar, setBrand, handleAccept, handleReset,
}: AppDrawerProps) => {
  const classes = useStyles();

  const handleBrand = ({ target } : ChangeEvent<HTMLInputElement>) => {
    setBrand(target.value);
  };

  const list = () => (
    <div className={classes.listWrapper}>
      <List>
        <ListItem>
          <TextField label="Brand" className={classes.itemHolder} onChange={handleBrand} />
        </ListItem>
        <ListItem>
          <FormControl className={classes.itemHolder}>
            <InputLabel id="demo-simple-select-label">Type Transmission</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeCar}
              onChange={(event) => setTypeCar(event.target.value as string)}
            >
              <MenuItem value="Petrol">Petrol</MenuItem>
              <MenuItem value="Diesel">Diesel</MenuItem>
            </Select>
          </FormControl>
        </ListItem>
        <ListItem>
          <Typography>Date: </Typography>
          <Button>Descending</Button>
          <Button>Ascending</Button>
        </ListItem>
      </List>
      <Box className={classes.acceptBtnWarpper}>
        <Button variant="contained" color="secondary" onClick={() => handleReset()}>
          Reset
        </Button>
        <Button variant="contained" color="primary" onClick={() => handleAccept()}>
          Accept
        </Button>
      </Box>
    </div>
  );

  return (
    <Drawer open={isDrawer} onClose={() => setIsDrawer(!isDrawer)}>
      {list()}
    </Drawer>
  );
};
export default AppDrawer;
