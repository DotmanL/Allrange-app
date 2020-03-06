import React from 'react';
import './App.css';
//import Particles from 'react-particles-js';
import HomePage from './Pages/Homepage/homepage.component';






class App extends React.Component{
  constructor(){
    super();
    this.state ={

    }
  }
  render(){
  return (
    <div>
      <HomePage/>
     
    </div>
  );
}
}
export default App;
