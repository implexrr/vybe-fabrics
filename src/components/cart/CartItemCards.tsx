import { useContext } from "react";

import { ShopContext } from "../../app/context/ShopContext";
import CartItemCard from "./CartItemCard";

const CartItemCards = () => {
  const { cartItems } = useContext(ShopContext);
  return (
      <div className="cartItemCards">
        {
          cartItems.map((cartItem) => {
            return (
              <CartItemCard cartItem={cartItem} key={cartItem.id}></CartItemCard>
            )
          })
        }
      </div>
  )
}

export default CartItemCards
