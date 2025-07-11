import { useContext, useState } from "react";

import { ShopContext } from "../../app/context/ShopContext";
import { SanitizedItem } from "../../app/types/types";
import ProductQuantitySlice from "./ProductQuantitySlice";

type ProductProps = {
  product: SanitizedItem;
};

const ProductCard = ({ product }: ProductProps) => {
  const { addToCart } = useContext(ShopContext);

  // Local state for quantity selector (not linked to cart until "Add to cart" is clicked)
  const [productQuantity, setProductQuantity] = useState(1);

  // Increment product quantity in local state
  const incrementProductQuantity = () => {
    setProductQuantity((productQuantity) => productQuantity + 1);
  };

  // Decrement product quantity, but never below 1
  const decrementProductQuantity = () => {
    setProductQuantity((productQuantity) => Math.max(1, productQuantity - 1));
  };

  return (
    <div className="productCard" id={product.id}>
      {/* Product image */}
      <div className="featuredImageContainer">
        <img src={product.featuredImage.url} />
      </div>

      {/* Product price display */}
      <div className="price">
        {product.price.amount} {product.price.currencyCode}
      </div>

      {/* Quantity controls UI (local to this product) */}
      <ProductQuantitySlice
        decrementProductQuantity={decrementProductQuantity}
        incrementProductQuantity={incrementProductQuantity}
        productQuantity={productQuantity}
      ></ProductQuantitySlice>

      {/* Add product to cart with selected quantity */}
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
