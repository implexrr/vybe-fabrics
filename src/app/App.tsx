import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import fetchProducts from "../utils/fetchProducts.ts";
import sanitizeFetch from "../utils/sanitizeFetch.ts";
import "../assets/styles/App.css"
import { ShopContext } from "./context/ShopContext.tsx";
import routes from './routes/routes.tsx'
import { CartItem, CartItems, SanitizedItem, SanitizedItems } from "./types/types.ts";

// Set up routing for the app using React Router
const router = createBrowserRouter(routes);


export const App = () => {
  // App-level states, to used later in ShopContext
  const [products, setProducts] = useState<SanitizedItems>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItems>([]);

  // Takes a SanitizedItem and adds it to the cart in the form of CartItem, which extends SanitizedItem by giving it a quantity property.
  const addToCart = (product : SanitizedItem, amount: number) => {
    // Checks if item already exists in cart. If it does, just update the item quantity. If not, alters the cart so that the item is added w/quantity 1.
    const itemExistsInCart = cartItems.some(item => item.id === product.id);
    if (itemExistsInCart) {
      // Update quantity of existing item
      setCartItems(cartItems.map(item => item.id === product.id ? {...item, quantity : item.quantity + amount} : item))
    }
    else {
      // Add new item with quantity
      setCartItems([...cartItems, {...product, quantity : amount}])
    }
  };

  /**
   * Change quantity of an item in the cart.
   * If quantity falls below 1, remove the item.
   * No need to check for cartItem existence
   * since this will only be called on cartItems that already exist
   */
  const changeCartQuantity = (cartItem : CartItem, amount: number) => {
    if (cartItem.quantity + amount < 1) {
      // Remove item if quantity becomes less than 1
      setCartItems(cartItems.filter(item => item.id != cartItem.id));
    }
    else {
      // Update quantity
      setCartItems(cartItems.map(item => item.id === cartItem.id ? {...item, quantity : item.quantity + amount} : item))
    }
  }

  /**
   * Load and cache product data on initial mount.
   * Checks localStorage before fetching from the server.
   */
  useEffect(() => {
    // Product loading needs to be wrapped in useEffect so that it doesn't constantly get called on every component render
    const loadProducts = async () => {
      // Check if items already in cache - if so, load items from cache
      const cached = localStorage.getItem('products');
      if (cached) {
        setProducts(JSON.parse(cached));
        setLoading(false);
        return;
      }
    
      // Items aren't in cache, so fetch from server and sanitize
      try {
      const fetchedProducts = await fetchProducts();
      const newProducts = sanitizeFetch(fetchedProducts);
      setProducts(newProducts);
      localStorage.setItem('products', JSON.stringify(newProducts));
      } catch (error) {
        // Handle error during fetch
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  // Wrap the app in ShopContext and provide router
  return (
    <ShopContext.Provider
      value={{
        addToCart,
        cartItems,
        changeCartQuantity,
        error,
        loading,
        products
      }}
    >
      <RouterProvider router={router} />
    </ShopContext.Provider>

  );
};

export default App;