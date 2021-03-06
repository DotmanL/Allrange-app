import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 20vw;
height: 350px;
background-color: #e5e5e5;
border-radius: 10px;
padding: 0.5rem;
margin: 0.5rem;

position: relative;


&:hover {
  .image{
  opacity: 0.9;
  cursor: pointer;
}
button {
  opacity: 0.85;
   display: flex;
}
}

@media screen and ( max-width: 800px) {
  width: 40vw;
  height: 100vw;


  
&:hover {
  .image{
  opacity: unset;

}
button {
  opacity: unset;
}
}
}
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  @media screen and ( max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }  
`;





export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
color: black;
  width: 90%;
  margin-bottom: 15px;


  @media screen and ( max-width: 800px) {
  font-size: 12px;
  font-family: Helvetica, sans-serif;
  }


`;

export const PriceContainer = styled.span`
  color: black;
  width: 20%;
  text-align: right;
`;