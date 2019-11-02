import React from 'react';
import './App.css';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Game from './containers/Game'

import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";


function App() {
  const isLogin = localStorage.getItem("usertoken") && true;


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/game"  >
          {!isLogin ? <Redirect to="/" /> : <Game />}
        </Route>

      </Switch>

    </Router >
  );
}

export default App;
