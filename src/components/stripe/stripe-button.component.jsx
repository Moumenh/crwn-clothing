import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


 const StripeCheckOutButton = ({ price }) => {
     const priceForStripe = price * 100
     const publishableKey = 'pk_test_bu7KkEYpaJwJcvi5N8IF0wAh00mLJ4D79e'
    
     const onToken = token => {
         console.log(token);
         alert('Payment Successful')
     }
    
     return (  
            <StripeCheckout
                label='Pay Now'
                name='m0mooZ clothing ltd'
                billingAddress
                shippingAddress
                image='https://sendeyo.com/up/d/f3eb2117da'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
    )
}


export default StripeCheckOutButton;