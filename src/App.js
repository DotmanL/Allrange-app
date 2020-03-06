import React from 'react';
import './App.css';
//import Particles from 'react-particles-js';
import HomePage from './Pages/Homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './Pages/Shop/shop';



class App extends React.Component{
  constructor(){
    super();
    this.state ={

    }
  }
  render(){
  return (
    <div>
      <Switch>
    <Route exact path ='/' component={HomePage}/>
    <Route  path ='/shop' component={ShopPage}/>
      </Switch>
     
    </div>
  );
}
}
export default App;
