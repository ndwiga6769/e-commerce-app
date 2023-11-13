import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./checkout.css";


const Checkout = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalItems = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div>
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: KES{totalAmount}</p>
      </div>
      <div>
        <h2>Payment Options</h2>
        <select>
          <option>Mpesa</option>
          <option>Debit or Credit Cards</option>
          <option>PayPal</option>
          <option>Skrill</option>
        </select>
      </div>
      <div>
        <h2>Delivery</h2>
        <input type="text" placeholder="Enter delivery location" />
        <select>
          <option>Aviv Shopping loudge</option>
          <option>Gives Plaza Mope store</option>
          <option>Adis Deliveries</option>
        </select>
      </div>
      <button>Complete Purchase</button>
    </div>
  );
};

export default Checkout;
