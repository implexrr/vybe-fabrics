import { useState } from "react";
import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";
import CartItemCards from "../components/CartItemCards";
import CartItemTotals from "../components/CartItemTotals";

const Cart = () => {
  const [cartError, setCartError] = useState<null | string>(null);
  const { cartItems } = useContext(ShopContext);

  const displayErrorMsg = () => {
    if (cartItems.length == 0) {
      setCartError("having an empty shopping cart is not the VYBE");
    } else {
      setCartError("only those that have passed the VYBE check can checkout");
    }
    setTimeout(() => {setCartError(null)}, 3000)
  }

  return (
    <div className="cart page">
      {(cartError !== null) && <div className="cart error">{cartError}</div>}
      <CartItemCards></CartItemCards>
      <CartItemTotals displayErrorMsg={displayErrorMsg}></CartItemTotals>
    </div>
  )
}

export default Cart