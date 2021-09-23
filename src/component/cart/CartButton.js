import React , {useState , useEffect} from 'react'
import classes from './CartButton.module.css';
import {useSelector} from "react-redux"


function CartButton(props) {
  const cartquantity = useSelector(state=>state.totalQuantity)
  const items = useSelector(state=>state.items)

  const [ buttonHighlited , setButtonhighleted ] =useState(false)

  const buttonClass = `${classes.button}   ${  buttonHighlited ?  classes.bump : ""}`
     useEffect( ()=>{
         if(items.length===0){
             return ;
         }
         setButtonhighleted(true)
        const timer =  setTimeout(() => {
             setButtonhighleted(false)
 
             
         }, 200);
         return ()=>{
             clearTimeout(timer)
         }
 
     } , [items])


    return (

        <button onClick={props.showCart} className={buttonClass}>
        <span>My Cart</span>
        <span className={classes.badge}>{cartquantity}</span>
      </button>
    )
}

export default CartButton
