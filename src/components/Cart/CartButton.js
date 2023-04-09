import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { cartSliceActions } from "../store/CartSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const openCartHandler = () => {
    dispatch(cartSliceActions.cartOpen());
  };

  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
