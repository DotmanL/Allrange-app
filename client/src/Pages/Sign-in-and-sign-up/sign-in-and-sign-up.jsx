import React from 'react';

import SignIn from "../../components/sign-in/sign-in";

import SignUp from "../../components/sign-up/sign-up";

import Background from './background'
import { SignInAndSignUpContainer,} from "./sign-in-and-sign-up.styles.jsx"



  const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
      <Background />
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
  
  export default SignInAndSignUpPage;

 











 