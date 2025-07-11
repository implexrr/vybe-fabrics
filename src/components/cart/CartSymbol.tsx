import { useContext } from "react"

import { ShopContext } from "../../app/context/ShopContext"

const CartSymbol = () => {
  const { cartItems } = useContext(ShopContext)
  const totalItems = cartItems.reduce((total, curItem) => total + curItem.quantity, 0);
  return (
    <div className="cartSymbolContainer">
      <svg fill="none" height="64" viewBox="0 0 64 64" width="64" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16H20L24 40H48L52 24H28" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
        <circle cx="24" cy="52" fill="white" r="4"/>
        <circle cx="44" cy="52" fill="white" r="4"/>
      </svg>
      <div className="cartCounter">{totalItems}</div>
    </div>
  )
}

export default CartSymbol
