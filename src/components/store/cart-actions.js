import { addCartSliceActions } from "./addCartSlice";
import { uiSliceActions } from "./uiSlice";

export const getData = () => {
  return async (dispatch) => {
    const gettingRequest = async () => {
      const response = await fetch(
        `https://redux-cart-e7eaf-default-rtdb.firebaseio.com/cart.json`
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data ");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await gettingRequest();
      dispatch(addCartSliceActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiSliceActions.notificationActive({
          status: "error",
          title: "error",
          message: "fetching cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiSliceActions.notificationActive({
        status: "pending",
        title: "Sending",
        message: "sending cart data",
      })
    );

    const sendingRequest = async () => {
      const response = await fetch(
        `https://redux-cart-e7eaf-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendingRequest();
      dispatch(
        uiSliceActions.notificationActive({
          status: "success",
          title: "success!",
          message: "sending cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiSliceActions.notificationActive({
          status: "error",
          title: "error",
          message: "error occured",
        })
      );
    }
  };
};
