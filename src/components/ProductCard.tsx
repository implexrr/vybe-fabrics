import { useContext, useState } from "react";

import { ShopContext } from "../app/context/ShopContext";
import { SanitizedItem } from "../app/types/types";
import QuantitySlice from "../components/QuantitySlice";

type ProductProps = {
  product: SanitizedItem;
};

const ProductCard = ({ product }: ProductProps) => {
  const { addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => {
    setQuantity((quantity) => quantity + 1);
  };
  const decrementQuantity = () => {
    setQuantity((quantity) => Math.max(1, quantity - 1));
  };

  return (
    <div className="productCard" id={product.id} key={product.id}>
      <div className="featuredImageContainer">
        <img src={product.featuredImage.url} />
      </div>
      <div className="price">
        {product.price.amount} {product.price.currencyCode}
      </div>
      <QuantitySlice
        decrementQuantity={decrementQuantity}
        incrementQuantity={incrementQuantity}
        quantity={quantity}
      ></QuantitySlice>
      <button
        className="addToCart"
        onClick={() => {
          addToCart(product, quantity);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
