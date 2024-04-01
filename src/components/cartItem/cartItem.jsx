import React from "react";

const CartItem = ({ name, price, quantity }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
