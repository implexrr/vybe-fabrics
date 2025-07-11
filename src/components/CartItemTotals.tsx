import CalculationCard from "./CalculationCard";
import CartItemPriceSlices from "./CartItemPriceSlices";

type CartItemTotalProps = {
  displayErrorMsg: () => void;
};

// TODO: Sectionize divs
const CartItemTotals = ({ displayErrorMsg } : CartItemTotalProps) => {
  return (
    <div className="cartItemTotals">
      <CartItemPriceSlices></CartItemPriceSlices>
      <CalculationCard></CalculationCard>
      <div className="cartCheckoutButtonContainer">
        <button onClick={displayErrorMsg}>Checkout</button>
      </div>
    </div>
  )
}

export default CartItemTotals

