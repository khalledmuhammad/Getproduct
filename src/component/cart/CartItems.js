import React  from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/cart";
function CartItems(props) {
  const dispatch = useDispatch();
  const { id} = props;

  const increaseItem = () => {
    dispatch(
      CartActions.addtoCart({
        id: props.id,
        price: props.price,
        totalPrice: props.totalPrice,
        quantiy: props.quantiy,
      })
    );
  };

 

  const decreaseItems = () => {
    dispatch(CartActions.removeFromcart(id));
  };
  return (
    <li key={id} className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.totalPrice.toFixed(2)}{" "}
          <span className={classes.itemprice}>
            (${props.price.toFixed(2)}/item)
          </span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItems}>-</button>
          <button onClick={increaseItem}>+</button>
        </div>
      </div>
    </li>
  );
}

export default CartItems;
