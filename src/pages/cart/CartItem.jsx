import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const {
    addToCart,
    deleteFromCart,
    cartItems,
    updateValueinInput,
    getTotalCartAmount,
  } = useContext(ShopContext);

  return (
    <div>
      <div>
        <div className="imageDiv">
          <img src={productImage} className="productImg" />
        </div>
        <p>{productName}</p>
        <p>{price}</p>
        <div>
          <button onClick={() => deleteFromCart(id)}>-</button>

          <input
            value={cartItems[id]}
            onChange={(e) => updateValueinInput(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
