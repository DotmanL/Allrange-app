import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectCartItems,  selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckOutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import './checkout.scss';

const CheckOutPage = ( {cartItems, total}) => (
 <div className='checkout-page'>
      <div className='checkout-header'>
      <div className='header-block'>
      <span>Product</span>
      </div>
      <div className='header-block'>
      <span>Description</span>
      </div>
      <div className='header-block'>
      <span>Quantity</span>
      </div>
      <div className='header-block'>
      <span>Price</span>
      </div>
      <div className='header-block'>
      <span>Remove</span>
      </div>
   </div>
   {
       cartItems.map(cartItem =>(
        <CheckOutItem key ={cartItem.id} cartItem={cartItem}/>
        ))}
   <div className='total'>Total: ₦{total}</div>
<div className='test-warning'>
   <strong>*Please use the following test credit card for payments*</strong> 
<br />
<strong>5555 5555 5555 4444 - Exp: 01/22 - CVV:123</strong>
</div>
<StripeCheckoutButton price={total} />
   </div>
)




const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect( mapStateToProps)
    (CheckOutPage);