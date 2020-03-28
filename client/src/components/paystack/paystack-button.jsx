import React from 'react';
import PaystackButton from 'react-paystack';
import { Pay } from './paystack-button.styles'


const Paystack = ({price}) => {
    const priceForPaystack = price*100;
    const key = "pk_test_58e8c6e2944476cb88d50142252d98664f53f2c3";
    const email = "dot@gmail.com";

    
    const callback = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

   const  close = () => {
        console.log("Payment closed");
    }

    const getReference = () => {
        //you can put any unique reference implementation code here
        let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

        for( let i=0; i < 15; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    return (
            <Pay>
          <PaystackButton
            text="Pay with Paystack"
            class="payButton"
            callback={callback}
            close={close}
            disabled={false} /*disable payment button*/
            embed={false} /*payment embed in your app instead of a pop up*/
            reference={getReference()}
            email={email}
            amount={priceForPaystack}
            paystackkey={key}
            tag="button"/*it can be button or a or input tag */
            />
            </Pay>
    );
  }

export default Paystack;