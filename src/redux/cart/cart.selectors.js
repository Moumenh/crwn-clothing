import { createSelector } from 'reselect';

const selectCart = state => state.cart;  // input selector takes the all reducer state and return part of it

export const selectCartItem = createSelector(
    [selectCart],  // in the order of the input selector
    (cart) => cart.cartItem // function that returns property of selected reducer

)

export const selectCartItemCount = createSelector (
    [selectCartItem],  // mesh shart ykon awwal input 3adi mmken mn eshe tani 3ashenno bedde bas cartitem
    (cartItem) =>
        cartItem.reduce(
            (acc, cartItem) =>
                acc + cartItem.quantity,
            0
        )
)