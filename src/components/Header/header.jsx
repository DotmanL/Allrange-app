import React from 'react';
import { Link } from 'react-router-dom';
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

const Header = ({ currentUser, hidden }) => (

    <div className="header">
        
        <Link className="logo-container" to="/">
            <Logo className='logo' />
        </Link>
        <div className='welcomecontainer'>
        <ReactTypingEffect text='Welcome to the Allrange Shopping Store' />
            </div>

        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ? (
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                        <Link className='option' to='/signin'> SIGN IN</Link>
                    )}
            <CartIcon />
        </div>
        {hidden ? null :
            <CartDropdown />
        }
    </div>
)
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);