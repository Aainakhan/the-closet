import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import './checkout.styles.scss';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeChekoutButton from '../../components/stripe-button/stripe-button.component'



const Checkout = ({cartItems, cartTotal}) => (
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

   cartItems.map(cartItem => (
    <CheckoutItem cartItem = {cartItem} key = {cartItem.id}/>
   ))

  }
 

  <div className='total'><span>Total: ${cartTotal}</span></div>
  <div className = "test-warning">
   *Please Use the following Test credit card Number for Payments
   card-no:4242 4242 4242 4242 Exp:01/21 cvv:123
  </div>
  <StripeChekoutButton price = {cartTotal}/>
 </div>
)

const mapStateToProps = createStructuredSelector({

 cartItems: selectCartItems,
 cartTotal: selectCartTotal
})


export default connect(mapStateToProps)(Checkout);