import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, deleteFromCart, cartItems, updateValueinInput } =
    useContext(ShopContext);

  return (
    <div>
      <div className="cartItemDiv">
        <div className="imageDiv">
          <img src={productImage} className="productImg" />
        </div>
        <div className="productDetailsOnCart">
          <p>{productName}</p>
          <br/>
          <p> ${price}</p>
          <br/>
          <div className="valueInCartItemDiv">
            <button className="changeItemOnBtn" onClick={() => deleteFromCart(id)}>-</button>
            <input
              value={cartItems[id]}
              className="inputForValueInCart"
              onChange={(e) => updateValueinInput(Number(e.target.value), id)}
            />
            <button className="changeItemOnBtn" onClick={() => addToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
