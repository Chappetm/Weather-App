import './App.css';
import { Route } from 'react-router-dom'
import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
    </React.Fragment>
  );
}

export default App;
