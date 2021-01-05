import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component' 
import Shop from './pages/shoppage/shop.component'

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={Shop}/>
    </div>
  );
}

export default App;
