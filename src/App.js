import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shoppage/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
   constructor() {
      super()

      this.state = {
         currentUser: null
      }
   }

   unsubscribeFromAuth = null;

   componentDidMount() {
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {


         // записываем нашего юзера в базу вызывая функцию createUserProfileDocument
         this.setState({currentUser: userAuth})
         createUserProfileDocument(userAuth);
      });
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div>
            <Header currentUser={this.state.currentUser} />
            <Switch>
               <Route exact path='/' component={Homepage} />
               <Route exact path='/shop' component={Shop} />
               <Route exact path='/sign' component={SignInAndSignUp} />
            </Switch>
         </div>
      )
   };
}

export default App;
