import { useState } from "react";
import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";
import CartItemCards from "../components/cart/CartItemCards";
import CartItemTotals from "../components/cart/CartItemTotals";

const Cart = () => {
  // Local state to hold and display a temporary error message
  const [cartError, setCartError] = useState<null | string>(null);

  // Access cart items from the global shop context
  const { cartItems } = useContext(ShopContext);

  // Display an error message based on whether the cart is empty
  const displayErrorMsg = () => {
    if (cartItems.length === 0) {
      setCartError("having an empty shopping cart is not the VYBE");
    } else {
      setCartError("only those that have passed the VYBE check can checkout");
    }

    // Clear the error message after 3 seconds
    setTimeout(() => {setCartError(null)}, 3000)
  }

  return (
    <div className="cart page">
      {/* Display cart error message, if any */}
      {(cartError !== null) && <div className="cart error">{cartError}</div>}

      {/* List of items currently in the cart */}
      <CartItemCards></CartItemCards>

      {/* Subtotals, totals, and checkout button */}
      <CartItemTotals displayErrorMsg={displayErrorMsg}></CartItemTotals>
    </div>
  )
}

export default Cart