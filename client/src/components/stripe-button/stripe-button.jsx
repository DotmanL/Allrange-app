import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
const priceForStripe = price *100;
const pubishableKey = 'pk_test_mx1ed7a7sVkWaupP4WkrBbav000uwjC4Ye'

const onToken = token => {
    axios({
       url: "payment",
       method: 'post',
       data:{
           amount: priceForStripe,
           token: token
       } 
    })
    .then(response => {
        alert("Payment Successful");
    })
    .catch(error => {
        console.log('Payment Error: ', error);
        alert(
            'There was an issue with your payment!. Please ensure you use the provided credit card'
        );
    });
};


return(
    <StripeCheckout 
    label= 'Pay With Stripe'
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