import React from 'react';
import {connect} from 'react-redux';


import './checkout-item.styles.scss';
import {clearItems,removeItem,addItem} from '../../redux/cart/cart.actions';

const CheckoutItem = ({cartItem, clearItems ,removeItem,addItem}) =>{

 const {name,imageUrl,quantity,price}= cartItem
return(
 <div className='checkout-item'>
  <div className='image-container'>
   <img  src = {imageUrl} alt='item' />

  </div>
  <span className = 'name'>{name}</span>
  

  
  <span className = 'quantity'>
  <div className = 'arrow' onClick = {() => removeItem(cartItem)}> &#10094;</div>
   {quantity}
   <div className = 'arrow' onClick = { () => addItem(cartItem)}>&#10095;</div>
   </span>
  

  <span className = 'price'>{price}</span>
  
  <div className = 'remove-button' onClick = {() => clearItems(cartItem)}> &#x274C;</div>
   
 </div>
)
}
const mapDispatchToProps = dispatch => ({
 clearItems :item => dispatch(clearItems(item)),
 addItem: item => dispatch(addItem(item)),
 removeItem: item => dispatch(removeItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);