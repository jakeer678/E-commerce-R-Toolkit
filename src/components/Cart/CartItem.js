import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { addCartSliceActions } from "../store/addCartSlice";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(addCartSliceActions.removeCartItems(id));
  };
  const addHandler = () => {
    dispatch(
      addCartSliceActions.addToCart({
        id,
        title,
        quantity,
        total,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <button onClick={addHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
