import { useContext } from "react";

import { ShopContext } from "../../app/context/ShopContext";

// Constant representing the tax rate (13%)
const TAX = 0.13;
const SHIPPING_COST = "FREE"

const CalculationCard = () => {
  const { cartItems } = useContext(ShopContext);

  // Calculates subtotal by summing quantity * price.amount for each cart item
  const subtotal = cartItems.reduce((total, curItem) => total + curItem.quantity * curItem.price.amount, 0);

  // Calculates tax based on subtotal
  const taxAmount = (TAX * subtotal).toFixed(2);

  // Calculates total including tax
  const totalIncTax = ((1 + TAX) * subtotal).toFixed(2);

  return (
    <div className="CalculationCard">
      {/* Subtotal Section */}
      <div className="cartSubtotalSlice">
        <p>$ {subtotal}</p>
      </div>

      {/* Tax Section */}
      <div className="cartTaxSlice">
        <p>$ {taxAmount}</p>
      </div>

      {/* Shipping Section (currently hardcoded as FREE) */}
      <div className="cartShippingSlice">
        <p>{SHIPPING_COST}</p>
      </div>

      {/* Total Section */}
      <div className="cartTotalSlice">
        <p>$ {totalIncTax}</p>
      </div>
    </div>
  )
}

export default CalculationCard