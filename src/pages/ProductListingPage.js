import React from "react";
import { products } from "../data.js";
import ProductCard from "../components/ProductCard.js";

const ProductListingPage = ({ addToCart }) => (
  <div className="product-listing">
    <h2>Our Plants</h2>
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  </div>
);

export default ProductListingPage;
