type ProductQuantityProps = {
  decrementProductQuantity: () => void;
  incrementProductQuantity: () => void;
  productQuantity: number;
};

const ProductQuantitySlice = ({ decrementProductQuantity, incrementProductQuantity, productQuantity }: ProductQuantityProps) => {
  return (
    <div className="sliceContainer product">
      {/* Button to decrease quantity */}
      <button className="decrementProductQuantity" onClick={decrementProductQuantity}>-</button>

      {/* Displays current quantity */}
      <span className="productQuantity">{productQuantity}</span>

      {/* Button to increase quantity */}
      <button className="incrementProductQuantity" onClick={incrementProductQuantity}>+</button>
    </div>
  )
}

export default ProductQuantitySlice