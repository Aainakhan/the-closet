import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeChekoutButton = ({price}) => {
 const priceforStripe = price * 100;
 const publishableKey = 'pk_test_51HgQz7IHFAV0aTyrzv9Xg1uXic58kcHrtkpmpl4WY9zpa6f9KpBZtR00aHN6f91QGVU6TM9SuttMQueZTWVg3Iba00Gq6kV9se';

 const OnToken = token => {
  console.log(token);
  alert("Payments successful")
 }

 return (
  <StripeCheckout
   label = 'Pay Now'
   name = 'theCloset Pvt Ltd'
   billingAddress
   shippingAddress
   image = 'https://sendeyo.com/up/d/f3eb2117da'
   description = {`Your total is $${price}`}
   amount = {priceforStripe}
   panelLabel = 'Pay Now'
   token = {OnToken}
   stripeKey = {publishableKey}

  />
 )
 }

 export default StripeChekoutButton;