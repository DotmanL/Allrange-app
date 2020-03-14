import React from 'react'
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import {connect} from 'react-redux'
import './cart-dropdown.scss';
import {selectCartItems} from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
  
  const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
  });
  
  export default connect(mapStateToProps)(CartDropdown);