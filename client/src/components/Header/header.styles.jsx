import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
background: #DAAD86;
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;

@media screen and ( max-width: 800px) {
  height: 60px;
  padding: 10px;
  margin-bottom: 20px;
}

`;

export const LogoContainer = styled(Link)`
  width: 50%;
    height: 100%;
    display: flex;
    padding: 25px;
    align-items: center;
    justify-content: flex-start; 
    margin-top: 5px;
    margin-left: 0px;
    @media screen and ( max-width: 800px) {
      width: 50px;
      padding: 0px;
  }

`;
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and ( max-width: 800px) {
      width: 80%;
  }


    `;

export const OptionLink = styled(Link)`
  
  padding: 10px 15px;
  cursor: pointer;

`;

// export const ReactTyping = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     text-align: center;
//     margin-left: 100px;
//     font-size: 25px;
//     color: white;
//     font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
// `;