import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";

const TAX = 0.13;

const CalculationCard = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="CalculationCard">
      <div className="cartSubtotalSlice">
        <p>$ {cartItems.reduce((total, curItem) => total + curItem.quantity * curItem.price.amount, 0)}</p>
      </div>
      <div className="cartTaxSlice">
        <p>$ {(TAX * cartItems.reduce((total, curItem) => total + curItem.quantity * curItem.price.amount, 0)).toFixed(2)}</p>
      </div>
      <div className="cartShippingSlice">
        <p>FREE</p>
      </div>
      <div className="cartTotalSlice">
        <p>$ {((1 + TAX) * cartItems.reduce((total, curItem) => total + curItem.quantity * curItem.price.amount, 0)).toFixed(2)}</p>
      </div>
    </div>
  )
}

export default CalculationCard