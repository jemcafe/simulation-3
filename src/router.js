import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import Dashboard from './components/UserAccount/Dashboard/Dashboard';
import Profile from './components/UserAccount/Profile/Profile';
import Friends from './components/UserAccount/Friends/Friends';
import Search from './components/UserAccount/Search/Search';

export default (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/home" component={ Dashboard } />
        <Route path="/profile" component={ Profile } />
        <Route path="/friends" component={ Friends } />
        <Route path="/search" component={ Search } />
    </Switch>
)