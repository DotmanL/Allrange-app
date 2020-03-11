import React from 'react';
import Particles from 'react-particles-js';
import SignIn from "../../components/sign-in/sign-in";
import "./sign-in-and-sign-out.scss"
import SignUp from "../../components/sign-up/sign-up";


const particlesOptions = {
    particles: {
      number: {
        value: 140,
        density: {
          enable: true,
          value_area: 700
        }
      },
      move: {
        speed: 6
      }
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: ['repulse']
        }
      }
    }
  };

class SignInAndSignUpPage extends React.Component{
constructor(){
    super();
    this.state ={

    }
  }
  render(){
  return (
      <div className="signcolor">
    <Particles className='particles'
      params={particlesOptions}
    />
<div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
</div>
</div>
  )
  }
}

export default SignInAndSignUpPage;