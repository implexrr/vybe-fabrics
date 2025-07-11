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
      <button className="decrementCartQuantity" onClick={decrementCartItemQuantity}>-</button>
      <span className="cartQuantity">{cartItem.quantity}</span>
      <button className="incrementCartQuantity" onClick={incrementCartItemQuantity}>+</button>
      <button className="deleteCartItem" onClick={deleteCartItem}>DELETE</button>
    </div>
  )
}

export default CartItemQuantitySlice