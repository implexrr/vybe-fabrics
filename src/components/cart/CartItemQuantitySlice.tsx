import { CartItem } from "../../app/types/types";

type CartItemQuantityProps = {
  cartItem: CartItem;
  decrementCartItemQuantity: () => void;
  deleteCartItem: () => void;
  incrementCartItemQuantity: () => void;
};

const CartItemQuantitySlice = ({ cartItem, decrementCartItemQuantity, deleteCartItem, incrementCartItemQuantity }: CartItemQuantityProps) => {
  return (
    <div className="sliceContainer cart">
      {/* Button to decrease item quantity */}
      <button className="decrementCartQuantity" onClick={decrementCartItemQuantity}>-</button>

      {/* Display current quantity */}
      <span className="cartQuantity">{cartItem.quantity}</span>

      {/* Button to increase item quantity */}
      <button className="incrementCartQuantity" onClick={incrementCartItemQuantity}>+</button>

      {/* Button to remove item from cart */}
      <button className="deleteCartItem" onClick={deleteCartItem}>DELETE</button>
    </div>
  )
}

export default CartItemQuantitySlice