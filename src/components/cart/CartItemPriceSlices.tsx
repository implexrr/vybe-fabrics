import { useContext } from "react";

import { ShopContext } from "../../app/context/ShopContext";

const CartItemPriceSlices = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cartItemPriceSlices">
      {/* Render a price summary line for each item in the cart */}
      {cartItems.map((cartItem) => (
        <div className="cartItemPriceSlice" key={cartItem.id}>
          {/* Item title and quantity */}
          <p>{cartItem.title} x {cartItem.quantity}</p>

          {/* Total price for this item (quantity * unit price) */}
          <p>${cartItem.quantity * cartItem.price.amount}</p>
        </div>
      ))}
    </div>
  )
}

export default CartItemPriceSlices