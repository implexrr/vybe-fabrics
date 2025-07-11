import { useContext, useState } from "react";

import { ShopContext } from "../../app/context/ShopContext";
import { SanitizedItem } from "../../app/types/types";
import ProductQuantitySlice from "./ProductQuantitySlice";

type ProductProps = {
  product: SanitizedItem;
};

const ProductCard = ({ product }: ProductProps) => {
  const { addToCart } = useContext(ShopContext);
  const [productQuantity, setProductQuantity] = useState(1);

  // No need to link incr/decr quantity to ShopContext since this doesn't change product props or cart items, 
  // just the amt that user will add to cart items on click. Actual "linking" to ShopContext is done via addToCart
  const incrementProductQuantity = () => {
    setProductQuantity((productQuantity) => productQuantity + 1);
  };
  const decrementProductQuantity = () => {
    setProductQuantity((productQuantity) => Math.max(1, productQuantity - 1));
  };

  return (
    <div className="productCard" id={product.id}>
      <div className="featuredImageContainer">
        <img src={product.featuredImage.url} />
      </div>
      <div className="price">
        {product.price.amount} {product.price.currencyCode}
      </div>
      <ProductQuantitySlice
        decrementProductQuantity={decrementProductQuantity}
        incrementProductQuantity={incrementProductQuantity}
        productQuantity={productQuantity}
      ></ProductQuantitySlice>
      <button
        className="addToCart"
        onClick={() => {
          addToCart(product, productQuantity);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
