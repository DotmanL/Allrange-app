import React from 'react';
import './App.css';
//import Particles from 'react-particles-js';
import HomePage from './Pages/Homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop';
import Header from './components/Header/header';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-out/sign-in-and-sign-out';
import {auth} from './firebase/firebase.utils';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

unsubscribeFromAuth = null;
  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState ({ currentUser: user});
    
      console.log(user);
    });
  }

  componentWilUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
    <Route exact path ='/' component={HomePage}/>
    <Route  path ='/shop' component={ShopPage}/>
    <Route  path ='/signin' component={ SignInAndSignUpPage}/>
    
      </Switch>
     
    </div>
  );
}
}
export default App;
