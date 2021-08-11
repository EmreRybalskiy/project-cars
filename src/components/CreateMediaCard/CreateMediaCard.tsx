import React, { FC, useState } from "react";

import {
  DialogTitle,
  DialogActions,
  Button,
  IconButton,
  FormControl,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";

import Dialog from "@material-ui/core/Dialog";
import { teal, indigo } from "@material-ui/core/colors";

const useStyles = makeStyles({
  holderCards: {
    display: "flex",
    flexFlow: "row wrap",
    maxWidth: 1200,
  },
  icon: {
    cursor: "pointer",
    fontSize: 30,
  },
  iconAdd: {
    color: teal[400],
    fontSize: 50,
  },
  iconAddposition: {
    position: "fixed",
    bottom: 100,
    right: 100,
  },
  cardCreator: {
    width: "100%",
    height: "100%",
  },
  holderDialog: {
    width: 600,
    height: 400,
    textAlign: "center",
  },
  dialogTitle: {
    color: indigo[600],
  },
  formControl: {
    width: "80%",
  },
  field: {
    marginBottom: 10,
    borderColor: "yellow !important",
  },
});

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
