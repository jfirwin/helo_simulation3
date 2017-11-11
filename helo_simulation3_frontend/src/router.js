import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from './components/Profile/Profile.js'
import Login from './components/Login/Login.js'

export default (
  <Switch>
    <Route component={Login} path="/" exact/>
    <Route component={Profile} path="/profile"/>
  </Switch>
)
