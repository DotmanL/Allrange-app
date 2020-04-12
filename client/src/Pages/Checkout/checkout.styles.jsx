import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
 
  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 23%;
  color: darkblue;
  font-size: 16px;
  
  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 60vw;
    font-size: 12px;
  }
`

export const TotalContainer = styled.div`
 border: 2px solid;
  background: green;
  margin-top: 30px;
  margin-left: auto;
  font-size: 30px;
  color: white;
  
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: white;
`;

export const EmptyCartContainer = styled.span`
  font-size: 30px;
  color: white;
  margin: 30px auto;
`;


export const PaystackContainer = styled.div`
  margin-left: 5%;
  width: 50vw;

  
  @media screen and (max-width: 800px) {
    margin-left: 50%;
    width: 50vw;
  }
`;
