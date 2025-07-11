import { useContext } from "react";

import { ShopContext } from "../../app/context/ShopContext";
import { CartItem } from "../../app/types/types";
import CartItemQuantitySlice from "./CartItemQuantitySlice";

type CartItemProps = {
  cartItem: CartItem;
}

const CartItemCard = ({ cartItem } : CartItemProps) => {
  const { changeCartQuantity } = useContext(ShopContext);

  // Increases item quantity by 1
  const incrementCartItemQuantity = () => {
    changeCartQuantity(cartItem, 1);
  }

  // Decrease item quantity by 1, but never below 1
  const decrementCartItemQuantity = () => {
    if (cartItem.quantity > 1) {
      changeCartQuantity(cartItem, -1);
    }
  }

  // Remove item from cart by subtracting its full quantity
  const deleteCartItem = () => {
    changeCartQuantity(cartItem, -cartItem.quantity)
  }

  return (
    <div className="cartItemCard" id={cartItem.id}>

      {/* Product image */}
      <div className="featuredImageContainer">
        <img src={cartItem.featuredImage.url} />
      </div>

      {/* Price display (price × quantity) */}
      <div className="price">
        $ {cartItem.price.amount * cartItem.quantity} {cartItem.price.currencyCode}
      </div>

      {/* Quantity controls: increment, decrement, and delete */}
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

