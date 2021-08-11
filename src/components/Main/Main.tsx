import React, { FC } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Catalog from "../Catalog/Catalog";
import Editor from "../Editor/Editor";
import { makeStyles } from "@material-ui/core/styles";

// Material UI
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles({
  main: {
    display: "flex",
    justifyContent: "center",
    background: grey[200],
    minHeight: "calc(100vh - 60px - 56px)",
  },
});

const Main: FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route path="/editor" component={Editor} />
      </Switch>
    </main>
  );
};

export default Main;
