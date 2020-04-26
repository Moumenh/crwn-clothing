import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type : CartActionTypes.TOGGLE_CART_HIDDEN
    // payload is optional according to the case
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})