import React from 'react'
import Modal from '../UI/modal'
import CartItems from './CartItems'
import {useSelector } from "react-redux"


function Cart(props) {
    const cartItems = useSelector(state=>state.items)


    return (
        <Modal  onClickback={props.onHideCart}>
            <div>
            <h2>Your Shopping Cart</h2>
            {
            cartItems.map(items=> <CartItems 
                id={items.id} 
                title={items.title}
                 price={items.price}
                 totalPrice={items.totalPrice}
                   quantity={items.quantiy}
             
                />
            ) }
             
                <button onClick={props.onHideCart} >close</button>
            </div>
            
        </Modal>
    )
}

export default Cart
