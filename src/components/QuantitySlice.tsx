type QuantityProps = {
  decrementQuantity: () => void;
  incrementQuantity: () => void;
  quantity: number;
};

const QuantitySlice = ({ decrementQuantity, incrementQuantity, quantity }: QuantityProps) => {
  return (
    <div className="sliceContainer">
      <button className="decrement" onClick={decrementQuantity}>-</button>
      <span className="quantity">{quantity}</span>
      <button className="increment" onClick={incrementQuantity}>+</button>
    </div>
  )
}

export default QuantitySlice