import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import "./cart.css";
function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className="productDivEachCart">
      <h1>Your Cart Items</h1>
      {PRODUCTS.map((product) => {
        //cartItems[product.id]!==0 means the key in cartItems object is not zero then we are displaying that object in cart component
        if (cartItems[product.id] !== 0) {
          return <CartItem data={product} />;
        }
      })}
      <div className="subTotalClass">
        <p>SubTotal: $ {totalAmount}</p>
      </div>

      <br />
      <div className="btnsOnCart">
        <div>
          <button><Link to="/" className="urls">Continue Shopping</Link></button>
        </div>
        <div>
          {" "}
          <button><Link to="#" className="urls">Checkout</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
