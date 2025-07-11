type ProductQuantityProps = {
  decrementProductQuantity: () => void;
  incrementProductQuantity: () => void;
  productQuantity: number;
};

const ProductQuantitySlice = ({ decrementProductQuantity, incrementProductQuantity, productQuantity }: ProductQuantityProps) => {
  return (
    <div className="sliceContainer product">
      <button className="decrementProductQuantity" onClick={decrementProductQuantity}>-</button>
      <span className="productQuantity">{productQuantity}</span>
      <button className="incrementProductQuantity" onClick={incrementProductQuantity}>+</button>
    </div>
  )
}

export default ProductQuantitySlice