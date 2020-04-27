import React from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItem} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.action'


const CartDropDown = ({cartItem, history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
           {cartItem.length ? ( 
           cartItem.map(cartItem => (
               <CartItem key={cartItem.id} item={cartItem}/>
           ))
           ): (<span className='empty-massage'>Yout cart is empty</span>)
           }
        </div>
        <CustomButton onClick={()=>{
             history.push('/checkout');
             dispatch(toggleCartHidden())}}>GO TO CHECK OUT</CustomButton>
    </div>
)

const mapStateToProps = (state) => ({
    cartItem : selectCartItem(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));