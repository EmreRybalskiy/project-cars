import React, { ChangeEvent, FC, MouseEvent } from 'react';
import Drawer from '@material-ui/core/Drawer/Drawer';
import TextField from '@material-ui/core/TextField';
import {
  FormControl, InputLabel, Select,
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
  handleReset: () => void;
  handleSortDate: (event: MouseEvent<HTMLButtonElement>) => void
  handleChangeDate: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AppDrawer: FC<AppDrawerProps> = ({
  isDrawer, typeCar,
  setIsDrawer, setTypeCar,
  setBrand,
  handleReset, handleSortDate,
  handleChangeDate,
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
          <TextField
            id="date"
            type="date"
            className={classes.itemHolder}
            onChange={handleChangeDate}
          />
        </ListItem>
        <ListItem>
          <Button onClick={(event) => handleSortDate(event)} name="desc">Descending</Button>
          <Button onClick={(event) => handleSortDate(event)} name="asc">Ascending</Button>
        </ListItem>
      </List>
      <Box className={classes.acceptBtnWarpper}>
        <Button variant="contained" color="secondary" onClick={() => handleReset()}>
          Reset
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
