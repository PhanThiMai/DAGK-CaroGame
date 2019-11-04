import React from 'react';
import './App.css';
import Login from './containers/Login'
import Register from './containers/Register'
import Game from './containers/Game'
import Profile from './containers/Profile'

import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";
import login from './reducers/login';


function App(props) {
  const logined = props.isLogin;
  const isLogin = logined ? logined.isLogin : false
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          {(isLogin) ? <Redirect to="/game" /> : <Login />}
        </Route>

        <Route exact path="/register" >
          {isLogin ? <Redirect to="/game" /> : <Register />}
        </Route>

        <Route exact path="/game" >
          {!(isLogin) ? <Redirect to="/" /> : <Game />}
        </Route>

        <Route exact path="/me" >
          {!isLogin ? <Redirect to="/" /> : <Profile />}
        </Route>

      </Switch>

    </Router >
  );
}

export default App;
