import { useState , useEffect} from 'react';
import Cart from './component/cart/Cart';
import Header from './component/header/Header';
import Product from './component/shop/Product';
import {useSelector , useDispatch} from "react-redux"
import { sendCartData , fetchData } from './store/Cart-actions';



function App() {
  const [showCart , SetShowCart] = useState(false)
  const OnAfterClose=($value) => {document.body.style.overflow = $value}


  const handleShowCart=()=>{
    SetShowCart(true)

    OnAfterClose("hidden")
  }
  const handleHideCard=()=>{
    SetShowCart(false)
    OnAfterClose("scroll")
}
const cart = useSelector(state=>state)
const dispatch = useDispatch()


useEffect(()=>{
  dispatch(fetchData())
 
}, [ dispatch ])
useEffect(()=>{
 
   

  if(cart.updated){
    dispatch(sendCartData( cart))

  }
 
 
}, [ cart , dispatch ])

  return (
    <>
    { showCart &&  <Cart onHideCart={handleHideCard} />}
    <Header onShowCart={handleShowCart} />
    <Product />
    </>
  );
}

export default App;
