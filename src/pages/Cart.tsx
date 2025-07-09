import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";

const Cart = () => {
  console.log('loading cart from shop context... here it is:');
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);
  return (
    <div className="cartItemCardsContainer">
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

export default Cart