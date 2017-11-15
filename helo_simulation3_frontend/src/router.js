import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from './components/Profile/Profile.js'
import Login from './components/Login/Login.js'
import Dashboard from './components/Dashboard/Dashboard.js'
import Search from './components/Search/Search.js'

export default (
  <Switch>
    <Route component={Dashboard} path="/" exact/>
    <Route component={Profile} path="/profile"/>
    <Route component={Login} path="/login"/>
    <Route component={Search} path="/search"/>
  </Switch>
)
