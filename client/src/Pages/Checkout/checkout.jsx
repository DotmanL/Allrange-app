import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import Paystack from '../../components/paystack/paystack-button'

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer, 
  EmptyCartContainer
} from './checkout.styles';


import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

 

export const CheckoutPage = ({ cartItems, total, }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL:  ₦{total}</TotalContainer>
    
    {cartItems.length ? (
  <Paystack price={total} />
  ) : ( 
<EmptyCartContainer>Fill your Cart before you can make payments</EmptyCartContainer>
  )}
  


    {cartItems.length ? (
    <StripeCheckoutButton price={total} />
    ) : ( 
      null
    )}

<WarningContainer>
      <strong>*Please use the following test credit card for payments*</strong>
      <br />
      <strong> 5555 5555 5555 4444 - Exp: 01/22 - CVV:123</strong>
    </WarningContainer>
  </CheckoutPageContainer>





);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);



 