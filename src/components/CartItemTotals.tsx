import CalculationCard from "./CalculationCard";
import CartItemPriceSlices from "./CartItemPriceSlices";

// TODO: Button that acc does something
// TODO: Sectionize divs
const CartItemTotals = () => {
  return (
    <div className="cartItemTotals">
      <CartItemPriceSlices></CartItemPriceSlices>
      <CalculationCard></CalculationCard>
      <div className="cartCheckoutButtonContainer">
        <button onClick={() => {window.alert('nah b')}}>Checkout</button>
      </div>
    </div>
  )
}

export default CartItemTotals

