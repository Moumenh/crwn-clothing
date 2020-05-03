import React from 'react'
import { connect } from 'react-redux';


import { selectCartItem } from '../../redux/cart/cart.selectors'
import { selectCartTotal } from '../../redux/cart/cart.selectors'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckOutButton from '../../components/stripe/stripe-button.component';

const CheckoutPage = ({cartItem,total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='checkout-block'>
                <span>Product</span>
            </div>
            <div className='checkout-block'>
                <span>Description</span>
            </div>
            <div className='checkout-block'>
                <span>Quantity</span>
            </div>
            <div className='checkout-block'>
                <span>Price</span>
            </div>
            <div className='checkout-block'>
                <span>Remove</span>
            </div>
        </div>
        {cartItem.map(cartItem=> 
                (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
        }
        <div className='total'>
            <span>TOTAL : ${total}</span>
        </div>
        <StripeCheckOutButton price={total}/>
    </div>
)

const mapStateToProps = state => ({
    cartItem : selectCartItem(state),
    total : selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage);