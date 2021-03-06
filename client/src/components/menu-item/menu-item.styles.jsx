import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	height: ${({ size }) => (size ? '380px' : '240px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid darkblue;
	margin: 0 7.5px 15px;
	overflow: hidden;
	&:hover {
    cursor: pointer;
    
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
    
		& .content {
			opacity: 0.9;
		}
  }
  
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and ( max-width: 800px) {
    height: 130px;
    width: 75px;
}
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  
  
  `;

  
export const ContentContainer = styled.div`
height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 0.5px solid black;
background-color: white;
opacity: 0.9;
position: absolute;
@media screen and ( max-width: 800px) {
  width: 70px;
  height: 80px; 
    
}
`;


export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  @media screen and ( max-width: 800px) {
    font-size: 12px;
}
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
  color: black;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
 
  @media screen and ( max-width: 800px) {
    font-size: 16px;
}
`;