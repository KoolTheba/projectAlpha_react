import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

// React Router
import Home from './components/20.router/Home'
import Users from './components/20.router/Users'
import UserDetail from './components/20.router/UserDetail'
import NotFound from './components/20.router/NotFound'

function AppGen() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
            <ul className='chars-list'>
                <li>
                  <Link to='/' className='App-link'>Home</Link>
                </li>
                <li>
                  <Link to='/users' className='App-link'>Users</Link>
                </li>
            </ul>
          </header>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/users'>
              <Users />
            </Route>
            <Route exact path='/users/:id'>
              <UserDetail />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default AppGen