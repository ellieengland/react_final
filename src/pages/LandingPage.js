import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="landing-page" style={{ textAlign: "center" }}>
    <h1>Welcome to Paradise Nursery</h1>
    <p>Your one-stop shop for beautiful houseplants!</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
