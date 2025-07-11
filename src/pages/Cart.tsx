import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";
import CartItemCard from "../components/CartItemCard";

const TAX = 0.13;

// TODO: Refactor into cartItemCards component
// TODO: Refactor into cartItemTotals component
  // TODO: Refactor into cartItemPriceSlices component
// TODO: Give checkout button troll fxn
const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <>
      <div className="cartItemCards">
        {
          cartItems.map((cartItem) => {
            return (
              <CartItemCard cartItem={cartItem} key={cartItem.id}></CartItemCard>
            )
          })
        }
      </div>
      <div className="cartItemTotals">
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
        <div className="cartSubtotalSlice">
          <p>{cartItems.reduce((total, curItem) => total + curItem.quantity * curItem.price.amount, 0)}</p>
        </div>
        <div className="cartTaxSlice">
          <p>{TAX * cartItems.reduce((total, curItem) => total + curItem.quantity * curItem.price.amount, 0)}</p>
        </div>
        <div className="cartShippingSlice">
          <p>FREE</p>
        </div>
        <div className="cartTotalSlice">
          <p>{(1 + TAX) * cartItems.reduce((total, curItem) => total + curItem.quantity * curItem.price.amount, 0)}</p>
        </div>
        <div className="cartCheckoutButtonContainer">
          <button onClick={() => {window.alert('nah b')}}>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart