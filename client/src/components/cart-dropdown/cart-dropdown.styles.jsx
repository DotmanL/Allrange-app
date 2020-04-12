import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const CartDropdownContainer = styled.div`
position: absolute;
width: 240px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 3px solid  darkblue;
background-color:  yellow;
top: 90px;
right: 60px;
z-index: 5;

@media screen and ( max-width: 800px) {
  right: 20px;
}
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
  background: green;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const EmptyCartContainer = styled.span`
  font-size: 18px;
  margin: 0px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;