import React from 'react';
import './App.css';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Game from './containers/Game'
import Profile from './components/Profile/Profile'

import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";


function App(props) {
  //const isLogin = localStorage.getItem("usertoken") && true;
  const isLogin = props.store.isLogin
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          {isLogin ? <Redirect to="/game" /> : <Login />}
        </Route>

        <Route exact path="/register" >
          {isLogin ? <Redirect to="/game" /> : <Register />}
        </Route>

        <Route exact path="/game" >
          {!isLogin ? <Redirect to="/" /> : <Game />}
        </Route>

        <Route exact path="/me" >
          {!isLogin ? <Redirect to="/" /> : <Profile />}
        </Route>

      </Switch>

    </Router >
  );
}

export default App;
