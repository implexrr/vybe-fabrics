import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";
import ProductCard from "../components/ProductCard";

const Products = () => {
  console.log('loading products from shop context... here they are:');
  const { cartItems, products } = useContext(ShopContext);
  console.log(products);
  console.log(cartItems);
  return (
    <div className="productCardsContainer">
      {
        products.map((product) => {
          return (
            <ProductCard key={product.id} product={product}></ProductCard>
          )
        })
      }
    </div>
  )
}
// TDL: Add to cart option, with +/- buttons for quantity. Clicking on addToCart changes the cartItems, but keeps the quantity count on the products page the same
  // 3 commits, one for wrapping up the productCard skeleton div, another for the actual functionality that changes the prod count, another for syncing it to cartItems
export default Products