import { useContext } from "react";

import { ShopContext } from "../../app/context/ShopContext";

const CartSymbol = () => {
  // Access cart items from global context
  const { cartItems } = useContext(ShopContext);

  // Calculate total quantity of all items in the cart
  const totalItems = cartItems.reduce((total, curItem) => total + curItem.quantity, 0);

  return (
    <div className="cartSymbolContainer">
      {/* Cart icon (SVG) */}
      <svg
        fill="none"
        height="64"
        viewBox="0 0 64 64"
        width="64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 16H20L24 40H48L52 24H28"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <circle cx="24" cy="52" fill="white" r="4" />
        <circle cx="44" cy="52" fill="white" r="4" />
      </svg>

      {/* Display total item count as badge */}
      <div className="cartCounter">{totalItems}</div>
    </div>
  );
};

export default CartSymbol;
