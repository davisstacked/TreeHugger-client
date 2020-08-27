import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home/Home';
import PhotosListContainer from '../pages/PhotosListContainer/PhotosListContainer';
import PhotoContainer from '../pages/PhotoContainer/PhotoContainer';
import NewPhotoContainer from '../pages/NewPhotoContainer/NewPhotoContainer';
import EditPhotoContainer from '../pages/EditPhotoContainer/EditPhotoContainer';
import UserContainer from '../pages/UserContainer/UserContainer';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';

export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/photos/new' render={() => 
           currentUser
            ? <NewPhotoContainer />
            : <Redirect to='/login' />
        } />
        <Route exact path='/photos/:id' component={PhotoContainer} />
        <Route path='/photos/:id/edit' component={EditPhotoContainer} />
        <Route path='/photos' component={PhotosListContainer} />
        <Route path='/users/:id' component={UserContainer} /> 
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} /> 
        <Route path='/register' component={Register} />
    </Switch>
);