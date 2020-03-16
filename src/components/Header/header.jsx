import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import ReactTypingEffect from 'react-typing-effect';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import './header.scss'
import  { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from  '../../redux/user/user.selectors';
import { auth } from '../../firebase/firebase.utils';

import { HeaderContainer, LogoContainer, OptionsContainer,  OptionLink, ReactTyping} from './header.styles'



const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
      </LogoContainer>
      <ReactTyping>
        <ReactTypingEffect text='Welcome to the Allrange Shopping Store' />
       </ReactTyping>  
    
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);