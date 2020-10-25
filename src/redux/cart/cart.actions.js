import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({
 type : CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
 type: CartActionTypes.Add_CART_ITEMS,
 payload: item
})

export const clearItems = (item) => ({
 type: CartActionTypes.CLEAR_CART_ITEMS,
 payload: item
})

export const removeItem = (item) => ({
 type: CartActionTypes.REMOVE_CART_ITEMS,
 payload: item
})