import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartSliceActions } from "../store/cartSlice";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cartItems.totalQauntity);

  // const lengthItem = listItems.length;
  const dispatch = useDispatch();
  const openCartHandler = () => {
    dispatch(cartSliceActions.cartOpen());
  };

  return (
    <button className={classes.button} onClick={openCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
