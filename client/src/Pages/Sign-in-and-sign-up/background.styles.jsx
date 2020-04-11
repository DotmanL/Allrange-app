import styled from 'styled-components';
import  cartt from './cartt.jpg';


export const BackgroundContainer = styled.div`
background-image:  url(${cartt});
width: 100vw;
height: 100vh;
background-size: cover;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: -1;
background-position: center; 
  background-repeat: no-repeat;

 
@media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
}


`

  