import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import fetchProducts from "../utils/fetchProducts.ts";
import sanitizeFetch from "../utils/sanitizeFetch.ts";
import "../assets/styles/App.css"
import { ShopContext } from "./context/ShopContext.tsx";
import routes from './routes/routes.tsx'
import { CartItem, CartItems, SanitizedItem, SanitizedItems } from "./types/types.ts";

const router = createBrowserRouter(routes);


export const App = () => {
  const [products, setProducts] = useState<SanitizedItems>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItems>([]);

  // Takes a SanitizedItem and adds it to the cart in the form of CartItem, which extends SanitizedItem by giving it a quantity property.
  const addToCart = (product : SanitizedItem, amount: number) => {
    // Checks if item already exists in cart. If it does, just update the item quantity. If not, alters the cart so that the item is added w/quantity 1.
    const itemExistsInCart = cartItems.some(item => item.id === product.id);
    if (itemExistsInCart) {
      setCartItems(cartItems.map(item => item.id === product.id ? {...item, quantity : item.quantity + amount} : item))
    }
    else {
      setCartItems([...cartItems, {...product, quantity : amount}])
    }
  };

  // No need to check for cartItem existence, as this will only be called on cartItems that already exist
  const changeCartQuantity = (cartItem : CartItem, amount: number) => {
    if (cartItem.quantity - amount < 1) {
      setCartItems(cartItems.filter(item => item.id != cartItem.id));
    }
    else {
      setCartItems(cartItems.map(item => item.id === cartItem.id ? {...item, quantity : item.quantity + amount} : item))
    }
  }

  // Product loading needs to be wrapped in useEffect so that it doesn't constantly get called on every component render
  useEffect(() => {
    const loadProducts = async () => {
      // Check if items already in cache - if so, load items from cache
      const cached = localStorage.getItem('products');
      if (cached) {
        console.log('products already fetched, getting products from localStorage')
        setProducts(JSON.parse(cached));
        setLoading(false);
        return;
      }
    
      // Items not in cache, so fetch them from server
      try {
      const fetchedProducts = await fetchProducts();
      const newProducts = sanitizeFetch(fetchedProducts);
      setProducts(newProducts);
      localStorage.setItem('products', JSON.stringify(newProducts));
      } catch (error) {
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

  return (
    <ShopContext.Provider value={{ addToCart, cartItems, changeCartQuantity, error, loading, products }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};

export default App;