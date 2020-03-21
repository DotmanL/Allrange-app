import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import ReactTypingEffect from 'react-typing-effect';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import  { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from  '../../redux/user/user.selectors';


import { HeaderContainer, LogoContainer, OptionsContainer,  OptionLink, ReactTyping} from './header.styles'

import { signOutStart } from '../../redux/user/user.actions'


const Header = ({ currentUser, hidden, signOutStart }) => (
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
      <OptionLink to='/myprofile'>My Profile</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOutStart}>
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

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch (signOutStart())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Header);