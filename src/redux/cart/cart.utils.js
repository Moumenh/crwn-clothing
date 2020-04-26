export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCartItem){
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id
            ? {...cartItem,quantity : cartItem.quantity + 1}
            : cartItem)
    } 

    return [...cartItems, { ...cartItemToAdd,quantity:1}] // we want to add an action to the array but not replace the original state (re-render)
}