import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home/Home';

import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} /> 
        <Route path='/register' component={Register} />
    </Switch>
);