import { useContext } from "react";

import { ShopContext } from "../app/App";

const Products = () => {
  console.log('loading products from shop context... here they are:')
  const { products } = useContext(ShopContext);
  console.log(products)
  return (
    <div>Products</div>
  )
}

export default Products
// TDL