import React from 'react'
import classes from './Header.module.css'
import CartButton from '../cart/CartButton'

function Header(props) {
    return (
        <header className={classes.mainHeader}>
            <h1>Products</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton showCart={props.onShowCart} />
                        
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
