import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
//IndexRoute: activate this component if none of the routes earlier match

//Because Main is being controlled by the Router on line 8,
//it gets access to Router's methods like history,
//which we will pass on to the SearchGithub child component
//--> see Main.js