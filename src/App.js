import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.js";
import LandingPage from "./pages/LandingPage.js";
import ProductListingPage from "./pages/ProductListingPage.js";
import ShoppingCartPage from "./pages/ShoppingCartPage.js";
import CheckoutPage from "./pages/CheckoutPage.js";


const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListingPage addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <ShoppingCartPage
              cart={cart}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
