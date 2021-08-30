import React, { FC, useState } from 'react';

// MaterialUI
import {
  DialogTitle,
  DialogActions,
  Button,
  IconButton,
  FormControl,
  Box,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
// styles
import useStyles from './styles';

const CreateMediaCard: FC = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              type="text"
              className={classes.field}
            />
            <TextField
              autoFocus
              label="Color"
              type="text"
              className={classes.field}
            />
            <TextField
              autoFocus
              label="Year"
              type="text"
              className={classes.field}
            />
            <TextField
              autoFocus
              label="Fuel Type"
              type="text"
              className={classes.field}
            />
            <TextField
              autoFocus
              label="Engine"
              type="text"
              className={classes.field}
            />
            <TextField
              autoFocus
              label="Price"
              type="text"
              className={classes.field}
            />
          </FormControl>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
};

export default CreateMediaCard;
