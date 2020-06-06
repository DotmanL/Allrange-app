import styled from 'styled-components';
import  regform from './regform.jpg';



export const Background = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  background-image: url(${regform}) no-repeat;
  background-size: cover; 
  
  @media screen and ( max-width: 800px) {
    background: darkblue;
    border: 5px solid white; 
    width: 95vw;
    align-items: center;
    } 
`


export const FormContainer = styled.div`
  width: 50vw;
  margin: auto;
    border-radius: 10px;
    border: 5px solid white;
  padding: 77px 99px 87px;

  @media screen and ( max-width: 800px) {
    padding: 27px 20px 27px 20px;
    border: none;
    width: 70vw;
    } 
  
  `

export const ContactHeader = styled.h3`
   text-transform: uppercase;
  font-size: 45px;
  font-family: "Montserrat-Bold";
  text-align: center;
  margin-bottom: 12px; 
  color: white;

  @media screen and ( max-width: 800px) {
    font-size: 28px;
    } 
`;

  
  
export const Button = styled.button`
  border: none;
  width: 162px;
  height: 51px;
  border: 2px solid #fff;
  margin: auto;
  margin-top: 60px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: none;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat-SemiBold";
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s; 
 
  & i {
    margin-left: 10px;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.1s;
    transition-duration: 0.1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: green;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out; }
  
  &:hover {
    border-color: transparent; }
    &:hover:before {
      -webkit-transform: scaleX(1);
      transform: scaleX(1); }
    &:hover i {
      -webkit-transform: translateX(4px);
      transform: translateX(4px); }

`;

