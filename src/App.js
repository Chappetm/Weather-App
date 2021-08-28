import './App.css';
import { Route } from 'react-router-dom'
import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import MapView from './components/MapView/MapView';

function App() {
  return (
    <React.Fragment>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route exact path='/details/:id' component={Details} />
      <Route exact path='/map' component={MapView} />
    </React.Fragment>
  );
}

export default App;
