import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Login from '../components/Login';
import FriendsList from '../components/FriendsList';
import PrivateRoute from '../components/PrivateRoute';

function Navigation() {

  return (
    <div className='navbar'>
        <ul>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/protected'>Friends List</Link>
            </li>
        </ul>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route component={Login}/>
            <PrivateRoute exact path='/friendslist' component={FriendsList}/>
        </Switch>

    </div>
  );
}

export default Navigation;