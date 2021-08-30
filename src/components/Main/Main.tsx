import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import Favorites from 'components/Favorites/Favorites';
// Components
import MediaPage from 'components/MediaPage/MediaPage';
import Catalog from '../Catalog/Catalog';
import Editor from '../Editor/Editor';
// Styles
import useStyles from './styles';

const Main: FC = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <Switch>
        <Route exact path="/cars" component={Catalog} />
        <Route path="/editor" component={Editor} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/car/:carId" component={MediaPage} />
      </Switch>
    </main>
  );
};

export default Main;
