import { useState } from 'react';
import Cart from './component/cart/Cart';
import Header from './component/header/Header';
import Product from './component/shop/Product';


function App() {
  const [showCart , SetShowCart] = useState(false)
  const handleShowCart=()=>{
    SetShowCart(true)
  }
  const handleHideCard=()=>{
    SetShowCart(false)
  }

  return (
    <>
    { showCart &&  <Cart onHideCart={handleHideCard} />}
    <Header onShowCart={handleShowCart} />
    <Product />
    </>
  );
}

export default App;
