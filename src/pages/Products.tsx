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

export default Products