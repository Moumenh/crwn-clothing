import React from 'react'
import {connect} from 'react-redux'

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';


const CartDropDown = ({cartItem}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
           {cartItem.map(cartItem => (
               <CartItem key={cartItem.id} item={cartItem}/>
           ))}
        </div>
        <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart : { cartItem } }) => ({
    cartItem
})

export default connect(mapStateToProps)(CartDropDown);