import React from 'react';
import Particles from 'react-particles-js';
import SignIn from "../../components/sign-in/sign-in";

import SignUp from "../../components/sign-up/sign-up";
import './sign-in-and-sign-up.scss'

import { SignInAndSignUpContainer,} from "./sign-in-and-sign-up.styles.jsx"

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

  const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
       <Particles className='particles'
        params={particlesOptions}
      />
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
  
  export default SignInAndSignUpPage;

 











 