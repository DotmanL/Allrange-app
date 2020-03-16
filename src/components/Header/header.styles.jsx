import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
background: rgba(255, 236, 67, 0.233);
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;  
`;
export const OptionsContainer = styled.div `
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const ReactTyping = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    margin-left: 300px;
    font-size: 30px;
    color: white;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;