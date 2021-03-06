import CartActionTypes from './cart.types'
import {addItemToCart} from '../cart/cart.utils';
import {removeCartItems} from '../cart/cart.utils';


const INITIAL_STATE = {
 hidden: true,
 cartItems: []
}


const cartReducer = (state = INITIAL_STATE,action) => {
 switch(action.type) {

  case CartActionTypes.TOGGLE_CART_HIDDEN:
   return {
    ...state,
    hidden: !state.hidden
   }
   case CartActionTypes.Add_CART_ITEMS:
    return {
     ...state,
     cartItems: addItemToCart(state.cartItems,action.payload)
    }
    case CartActionTypes.CLEAR_CART_ITEMS:
       return {
          ...state,
          cartItems: state.cartItems.filter(cartItem => (cartItem.id !== action.payload.id))
       }
       case CartActionTypes.REMOVE_CART_ITEMS:
          return {
             ...state,
             cartItems: removeCartItems(state.cartItems,action.payload)
          }
   default:
    return state;
 }
}

export default cartReducer;