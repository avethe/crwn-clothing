import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component' 

const Hatspage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hatspage</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/hats' component={Hatspage}/>
    </div>
  );
}

export default App;
