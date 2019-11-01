import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Login from './Components/login'
import Register from './Components/register'

function App() {
  return (
  
  <Switch>
    <Route exact path='/' render={(routerProps)=> <Login {...routerProps} />} />
    <Route exact path='/register' render={(routerProps)=> <Register {...routerProps} />} />

  </Switch>

  );
}

export default App;
