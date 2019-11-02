import React from 'react';
import './App.css';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Game from './components/Home/Game';

import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/game" component={Game} />

      </Switch>

    </Router >
  );
}

export default App;
