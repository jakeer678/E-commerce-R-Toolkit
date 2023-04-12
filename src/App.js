import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiSliceActions } from "./components/store/uiSlice";
import Notification from "./components/UI/Notification";
import { getData, sendCartData } from "./components/store/cart-actions";


let isInitial = true;
function App() {
  const showCart = useSelector((state) => state.cart.isCartOpen);
  const cart = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification.notifications);

useEffect(()=>{
  dispatch(getData())
},[dispatch])

  useEffect(() => {
    if(isInitial) {
      isInitial=false
      return
    }
   dispatch(sendCartData(cart))
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;

// const fetchData = async () => {
//   try {
//     dispatch(
//       uiSliceActions.notificationActive({
//         status: "pending",
//         title: "Sending",
//         message: "sending cart data",
//       })
//     );
//     const response = await fetch(
//       `https://redux-cart-e7eaf-default-rtdb.firebaseio.com/cart.json`,
//       {
//         method: "PUT",
//         body: JSON.stringify(cart),
//       }
//     );
//     const responseData = response.data;
//     if (!responseData) {
//       dispatch(
//         uiSliceActions.notificationActive({
//           status: "success",
//           title: "success!",
//           message: "sending cart data failed",
//         })
//       );
//     } else {
//       dispatch(
//         uiSliceActions.notificationActive({
//           status: "success",
//           title: "success!",
//           message: "sending cart data successful",
//         })
//       );
//     }
//     console.log(responseData);
//   } catch (err) {
//     dispatch(
//       uiSliceActions.notificationActive({
//         status: "error",
//         title: "error",
//         message: "error occured",
//       })
//     );
//     console.log(err);
//   }
// };
