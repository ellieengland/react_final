import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      {hover && (
        <div className="product-details">
          <p>Category: {product.category}</p>
          <p>{product.description}</p>
        </div>
      )}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
