import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Login from './Components/login'
import Register from './Components/register'
import HomePage from './Components/homepage'

function App() {
  return (
  
  <Switch>
    <Route exact path='/' render={(routerProps)=> <Login {...routerProps} />} />
    <Route exact path='/register' render={(routerProps)=> <Register {...routerProps} />} />
    <Route exact path='/home' render={(routerProps)=> <HomePage {...routerProps} />} />

  </Switch>

  );
}

export default App;
