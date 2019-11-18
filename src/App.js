import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Login from './Components/login'
import Register from './Components/register'
import HomePage from './Components/homepage'
import Admin from './Components/admin'
import About from './Components/about'
import ShoeProfile from './Components/shoeProfile'
import Navbar from './Components/navBar'

function App() {
  return (
    <React.Fragment>
    <Navbar />

    <Switch>
      <Route exact path='/' render={(routerProps)=> <Login {...routerProps} />} />
      <Route exact path='/register' render={(routerProps)=> <Register {...routerProps} />} />
      <Route exact path='/home' render={(routerProps)=> <HomePage {...routerProps} />} />
      <Route exact path='/admin' render={(routerProps)=> <Admin {...routerProps} />} />
      <Route exact path='/about' render={(routerProps)=> <About {...routerProps} />} />
      <Route exact path='/shoeProfile' render={(routerProps)=> <ShoeProfile {...routerProps} />} />



    </Switch>
  </React.Fragment>

  );
}

export default App;
