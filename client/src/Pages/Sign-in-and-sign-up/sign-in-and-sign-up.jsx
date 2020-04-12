import React from 'react';

import SignIn from "../../components/sign-in/sign-in";

import SignUp from "../../components/sign-up/sign-up";


import { SignInAndSignUpContainer, GlobalStyle} from "./sign-in-and-sign-up.styles.jsx"



  const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
       <GlobalStyle />
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
  
  export default SignInAndSignUpPage;

 











 