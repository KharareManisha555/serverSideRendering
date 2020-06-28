import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './lib/Routes';
import {Route, Switch} from 'react-router-dom';
import AppComp     from './Component/AppComp.js';


const App = ()=> {
  return (
    <Switch>
      <Routes />
    </Switch>
  );
}

export default App;
