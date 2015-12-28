import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Content from '../components/Content';
import { Route, IndexRoute } from 'react-router';
export default (
  <Route  component={Main}>
    <Route  path="/*" component={Content} />
    <IndexRoute component={Home} />
  </Route>
);