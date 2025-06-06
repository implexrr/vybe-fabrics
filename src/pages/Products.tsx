import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";

const Products = () => {
  console.log('loading products from shop context... here they are:');
  const { addToCart, cartItems, products } = useContext(ShopContext);
  // console.log(products);
  // addToCart();
  return (
    <button onClick={() => {
      addToCart(products[0]);
      console.log(cartItems);
    }}>Products</button>
  )
}

export default Products
// TDL