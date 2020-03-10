import React from 'react';
import './App.css';
//import Particles from 'react-particles-js';
import HomePage from './Pages/Homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop';
import Header from './components/Header/header';
import SignInAndSignUpPage from './Pages/Sign-in-and-sign-out/sign-in-and-sign-out';

class App extends React.Component{
  constructor(){
    super();
    this.state ={

    }
  }
  render(){
  return (
    <div>
      <Header/>
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
