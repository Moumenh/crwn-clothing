import CartActionTypes from './cart.types'
import { addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    hidden : true,
    cartItem: []
}

const cartReducer = ( state= INITIAL_STATE, action) =>{
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                // we add ... state so we pring other state properties 
                ...state,
                cartItem : addItemToCart(state.cartItem, action.payload) // we want to add an action to the array but not replace the original state (re-render)
            }
        default:
            return state
    }
}

export default cartReducer;