import { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import fetchProducts from "../utils/fetchProducts.ts";
import "../assets/styles/App.css"
import sanitizeFetch from "../utils/sanitizeFetch.ts";
import routes from './routes/routes.tsx'

const router = createBrowserRouter(routes);

export const ShopContext = createContext({
  addToCart: () => {},
  cartItems: [],
  error: null as null | string,
  loading: true,
  products: []
}
);

export const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = () => {
    // TDL
  };

  useEffect(() => {
    // TDL IMPORTANT: Refactor this into loadProducts (this file) and fetch products (another file) and sanitize products (another file), there's too much going on here
    // fetch->sanitize->load?
    // loadProducts
    const loadProducts = async () => {
      
    }

    const oldFetchProductsTDLDelLater = async () => {
      const cached = localStorage.getItem('products');
      if (cached) {
        console.log('products already fetched, getting products from localStorage')
        setProducts(JSON.parse(cached));
        setLoading(false);
        return;
      }

      try {
        console.log('fetching products')
        const request = await fetch("https://mock.shop/api?query={products(first:%2030){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}");
        if (request.status >= 400) throw new Error("server error");
        const response = await request.json();
        const newProducts = response.data.products.edges;
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
    };
    oldFetchProductsTDLDelLater();
  }, []);

  return (
    <ShopContext.Provider value={{ addToCart, cartItems, error, loading, products }}>
      <RouterProvider router={router} />
    </ShopContext.Provider>
  );
};

export default App;