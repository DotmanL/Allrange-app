import React from 'react';
import { ReactComponent as Logo } from '../../assets/allrange.svg'
// import ReactTypingEffect from 'react-typing-effect';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import  { createStructuredSelector } from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from  '../../redux/user/user.selectors';


import { HeaderContainer, LogoContainer, OptionsContainer,  OptionLink, OptionCont} from './header.styles'

import { signOutStart } from '../../redux/user/user.actions'


const Header = ({ currentUser, hidden, signOutStart,}) => (
    <HeaderContainer>
       <LogoContainer to='/'>
      <Logo className='logo' />
      </LogoContainer>
      {/* <ReactTyping>
        <ReactTypingEffect text='Welcome to the Allrange Shopping Store' />
       </ReactTyping>   */}
    
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contactus'>CONTACT</OptionLink>
      <OptionLink to='/myprofile'>DASHBOARD</OptionLink>
      
      {currentUser ? (
        <OptionCont>
        <OptionLink as='div' onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
        <OptionLink as="div">{`Hi, ${currentUser.displayName}`}</OptionLink>
          </OptionCont>
        
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



  // <img className='thumb' src={`${currentUser.photoURL}`} alt= 'img' /> 
      