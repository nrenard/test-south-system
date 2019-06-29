import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import Loader from './components/Loader';

const defatultLodable = path =>
  Loadable({
    loader: () => import('./pages/' + path),
    loading: () => <Loader />,
  });

const Routes = () => (
  <Switch>
    <Route path="/" exact component={defatultLodable('Home')} />
    <Route path="/favorites" exact component={defatultLodable('Favorites')} />
  </Switch>
);

export default Routes;
