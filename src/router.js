import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './components/Login/Login';
import UserAccount from './components/UserAccount/UserAccount';
import Dashboard from './components/UserAccount/Dashboard/Dashboard';
import Profile from './components/UserAccount/Profile/Profile';
import Friends from './components/UserAccount/Friends/Friends';
import Search from './components/UserAccount/Search/Search';

export default (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/user" component={ UserAccount} />
            <Route exact path="/user/dashboard" component={ Dashboard } />
            <Route path="/user/profile" component={ Profile } />
            <Route path="/user/friends" component={ Friends } />
            <Route path="/user/search" component={ Search } />
        <Route/>
    </Switch>
)