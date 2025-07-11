import CartItemCards from "../components/CartItemCards";
import CartItemTotals from "../components/CartItemTotals";

const Cart = () => {
  return (
    <div className="class page">
      <CartItemCards></CartItemCards>
      <CartItemTotals></CartItemTotals>
    </div>
  )
}

export default Cart