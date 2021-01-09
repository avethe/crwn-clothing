import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
   return (
      <div>
         <Header />
         <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/sign' component={SignInAndSignUp} />
         </Switch>
      </div> 
   );
}

export default App;
