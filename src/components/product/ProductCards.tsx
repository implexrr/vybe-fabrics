import { useContext } from "react";

import { ShopContext } from "../../app/context/ShopContext";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  const { products } = useContext(ShopContext);
  return (
    <div className="productCards">
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

export default ProductCards