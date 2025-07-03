import { useContext } from "react";

import { ShopContext } from "../app/context/ShopContext";

const Products = () => {
  console.log('loading products from shop context... here they are:');
  const { addToCart, cartItems, products } = useContext(ShopContext);
  console.log(products);
  console.log(cartItems);
  return (
    <div className="productCardsContainer">
      {
        products.map((product) => {
          return (
            <div className="productCard" id={product.id} key={product.id}>
              <div className="featuredImageContainer">
                <img src={product.featuredImage.url}/>
              </div> 
              <div className="price">{product.price.amount} {product.price.currencyCode}</div>
            </div>
          )
        })
      }
    </div>
  )
}
export default Products