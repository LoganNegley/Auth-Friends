import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

function Navigation() {

  return (
    <div className='navbar'>
        <ul>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/friends-list'>Friends List</Link>
            </li>
        </ul>
        <Switch>
            <Route/>
            <Route/>
        </Switch>

    </div>
  );
}

export default Navigation;