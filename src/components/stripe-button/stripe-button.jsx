import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
const priceForStripe = price *100;
const pubishableKey = 'pk_test_mx1ed7a7sVkWaupP4WkrBbav000uwjC4Ye'

const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
}
return(
    <StripeCheckout 
    label= 'Pay Now'
    name='Allrange'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/Cuz.svg'
    description= {`Your Total is  ₦${price}`}
    amount = {priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey ={pubishableKey}
    />
)

};

export default StripeCheckoutButton;