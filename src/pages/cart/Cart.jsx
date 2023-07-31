import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./CartItem";
function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div>
      {PRODUCTS.map((product) => {
        //cartItems[product.id]!==0 means the key in cartItems object is not zero then we are displaying that object in cart component
        if (cartItems[product.id] !== 0) {
          return <CartItem data={product} />;
        }
      })}

      <div>
        <p>SubTotal: $ {totalAmount}</p>
        <button>Continue Shopping</button>
      </div>
    </div>
  );
}

export default Cart;
