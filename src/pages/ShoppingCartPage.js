import { useNavigate } from "react-router-dom";
import CartItem from '../components/CartItem.js';


const ShoppingCartPage = ({ cart, updateQuantity, removeItem }) => {
  const navigate = useNavigate();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          updateQuantity={updateQuantity}
          removeItem={removeItem}
        />
      ))}
      <button onClick={() => navigate("/checkout")}>Checkout</button>
      <button onClick={() => navigate("/products")}>Continue Shopping</button>
    </div>
  );
};

export default ShoppingCartPage;
