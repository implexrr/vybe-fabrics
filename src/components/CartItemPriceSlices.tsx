import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";

const CartItemPriceSlices = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cartItemPriceSlices">
      {
        cartItems.map((cartItem) => {
          return (
            <div className="cartItemPriceSlice">
              <p>{cartItem.title} x {cartItem.quantity}</p>
              <p>${cartItem.quantity * cartItem.price.amount}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default CartItemPriceSlices