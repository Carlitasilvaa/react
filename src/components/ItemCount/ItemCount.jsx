import React, { useState } from "react";

const ItemCount = ({ initial = 0, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (onAdd) {
      onAdd(count);
    }
  };

  return (
    <div>
      <h2>{count}</h2>
      <p>Stock disponible: {stock}</p>
      <button disabled={count <= 1} onClick={decrement}>-</button>
      <button disabled={count >= stock} onClick={increment}>+</button>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
