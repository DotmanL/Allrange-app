import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
    font-family: "Open Sans Condensed";
    padding: 20px 40px;
    background: #1f5673;
    color: #faf9f9;
    @media screen and ( max-width: 800px) {
        padding: 10px;
    }
}

a{
    text-decoration: none;
    color: White;
    
}
*{
    box-sizing: border-box;
}


`