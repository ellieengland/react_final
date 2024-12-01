import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="cart-item">
    <img src={item.image} alt={item.name} />
    <h4>{item.name}</h4>
    <p>Unit Price: ${item.price}</p>
    <p>Total: ${item.price * item.quantity}</p>
    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
    <span>{item.quantity}</span>
    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
    <button onClick={() => removeItem(item.id)}>Delete</button>
  </div>
);

export default CartItem;
