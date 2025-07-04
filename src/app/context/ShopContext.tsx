import { createContext } from "react";

import { CartItems, SanitizedItem, SanitizedItems } from "../types/types";

interface ShopContextType {
  addToCart: (product: SanitizedItem) => void;
  cartItems: CartItems;
  error: null | string;
  loading: boolean;
  products: SanitizedItems;
}

// Provide a dummy/default value of the correct type
const defaultShopContext: ShopContextType = {
  addToCart: () => {},
  cartItems: [],
  error: null,
  loading: true,
  products: []
};

export const ShopContext = createContext<ShopContextType>(defaultShopContext);
