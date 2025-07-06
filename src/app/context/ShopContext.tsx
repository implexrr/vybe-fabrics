import { createContext } from "react";

import { CartItems, SanitizedItem, SanitizedItems } from "../types/types";

// Type for shop context
interface ShopContextType {
  addToCart: (product: SanitizedItem, amount: number) => void;
  cartItems: CartItems;
  error: null | string;
  loading: boolean;
  products: SanitizedItems;
}

// Provides a default value of the correct type
const defaultShopContext: ShopContextType = {
  addToCart: () => {},
  cartItems: [],
  error: null, // Nothing is loaded by default, so no error is encountered when context is initially created
  loading: true, // Load isn't finished by default, so this is set to true
  products: []
};

// Creates instance of default context, then export for other modules to use
export const ShopContext = createContext<ShopContextType>(defaultShopContext);
