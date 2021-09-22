import React from 'react'
import classes from "./ProductItems.module.css"
import Card from "../UI/Card"
import {  useDispatch} from "react-redux"
import { CartActions } from '../../store/cart'
function ProductItems(props) {
  const dispatch = useDispatch()
    const {  id , title, price,description,image} = props;
    const addToCart=()=>{
      dispatch(CartActions.addtoCart({id , title, price}))
    }
    return (
            <Card className={classes.item } style={{  
              backgroundImage:`url(${image})`}}  >
            <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${price.toFixed(2)}
            </div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart} >Add to Cart</button>
        </div> 
           </Card>
            
     
    )
}

export default ProductItems
