import React from 'react';
import './App.css';
//import Particles from 'react-particles-js';
import HomePage from './Pages/Homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


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
    <Route  path ='/hats' component={HatsPage}/>
      </Switch>
     
    </div>
  );
}
}
export default App;
