import React, { FC } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles({
  list: {
    border: "1px solid lightgray",
    margin: "10px 0",
  },
});

interface ListProps {
  items: any[];
}

const MainList: FC<ListProps> = ({ items }) => {
  const classes = useStyles();

  return (
    <div>
      {items.map((item) => (
        <div>
          <List className={classes.list}>
            <ListItem>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  // checked={checked.indexOf(value) !== -1}
                  // tabIndex={-1}
                  disableRipple
                  // inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </List>{" "}
        </div>
      ))}
    </div>
  );
};

export default MainList;
