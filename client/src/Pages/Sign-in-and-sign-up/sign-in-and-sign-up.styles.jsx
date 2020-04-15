import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components'
import  cartt from './cartt.jpg';





export const GlobalStyle = createGlobalStyle`
  body {
background-image:  url(${cartt});
width: 100vw;
height: 100vh;
background-size: cover;
position: relative;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: -1;
background-position: center; 
background-repeat: no-repeat;

@media screen and (max-width: 800px) {
    background-size: cover;
    background-repeat: repeat;
    
}


}`

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
 
  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;


    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;





