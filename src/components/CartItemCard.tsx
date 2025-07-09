import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";
import { CartItem } from "../app/types/types";

type CartItemProps = {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem } : CartItemProps) => {
  const { changeCartQuantity } = useContext(ShopContext);
  // Need increment/decrement fxns to change cart item quantity
  // fxns should link to cartItems in ShopContext since incr/decr instantly changes CartItems
    // User should not be allowed to go below quantity 1

  // Need delete btn to remove item from cartItems in ShopContext.

  return (
    <div className="cartItemCard" id={cartItem.id}>
      <div className="featuredImageContainer">
        <img src={cartItem.featuredImage.url} />
      </div>
      <div className="price">
        {cartItem.price.amount * cartItem.quantity} {cartItem.price.currencyCode}
      </div>
    </div>
  )
}

export default CartItemCard

