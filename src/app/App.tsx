import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import fetchProducts from "../utils/fetchProducts.ts";
import sanitizeFetch from "../utils/sanitizeFetch.ts";
import "../assets/styles/App.css"
import { ShopContext } from "./context/ShopContext.tsx";
import routes from './routes/routes.tsx'
import { CartItems, SanitizedItem, SanitizedItems } from "./types/types.ts";

const router = createBrowserRouter(routes);


export const App = () => {
  const [products, setProducts] = useState<SanitizedItems>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItems>([]);

  const addToCart = (product : SanitizedItem) => {
    const exists = cartItems.some(cartItem => cartItem.id === product.id);
    if (exists) {
      setCartItems(cartItems.map(item => item.id === product.id ? {...item, quantity : item.quantity + 1} : item))
    }
    else {
      setCartItems([...cartItems, {...product, quantity : 1}])
    }
  };

  useEffect(() => {
    const loadProducts = async () => {
      // Check if items already in cache, if so, load items from cache
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
    <ShopContext.Provider value={{ addToCart, cartItems, error, loading, products }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};

export default App;