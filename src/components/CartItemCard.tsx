import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";
import { CartItem } from "../app/types/types";
import CartItemQuantitySlice from "./CartItemQuantitySlice";

type CartItemProps = {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem } : CartItemProps) => {
  const { changeCartQuantity } = useContext(ShopContext);
  const incrementCartItemQuantity = () => {
    changeCartQuantity(cartItem, 1);
  }
  const decrementCartItemQuantity = () => {
    if (cartItem.quantity > 1) {
      changeCartQuantity(cartItem, -1);
    }
  }
  const deleteCartItem = () => {
    changeCartQuantity(cartItem, -cartItem.quantity)
  }

  return (
    <div className="cartItemCard" id={cartItem.id}>
      <div className="featuredImageContainer">
        <img src={cartItem.featuredImage.url} />
      </div>
      <div className="price">
        $ {cartItem.price.amount * cartItem.quantity} {cartItem.price.currencyCode}
      </div>
      <CartItemQuantitySlice
        cartItem={cartItem}
        decrementCartItemQuantity={decrementCartItemQuantity}
        deleteCartItem={deleteCartItem}
        incrementCartItemQuantity={incrementCartItemQuantity}>
      </CartItemQuantitySlice>
    </div>
  )
}

export default CartItemCard

