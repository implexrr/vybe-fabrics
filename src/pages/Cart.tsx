import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";
import CartItemCards from "../components/CartItemCards";
import CartItemTotals from "../components/CartItemTotals";

// TODO: Refactor into cartItemCards component
// TODO: Refactor into cartItemTotals component
  // TODO: Refactor into cartItemPriceSlices component
const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <>
      <CartItemCards></CartItemCards>
      <CartItemTotals></CartItemTotals>
    </>
  )
}

export default Cart