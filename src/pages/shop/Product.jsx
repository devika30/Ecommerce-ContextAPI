import React, { useContext } from "react";
import "./shop.css";
import { ShopContext } from "../../context/shopContext";
function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div>
      <React.Fragment key={id}>
        <div className="eachItemDiv">
          <div className="imageDiv1">
            <img src={productImage} className="productImg" />
          </div>
          <div className="productDetailsDiv">
            <div>
              {" "}
              <p>{productName}</p>
            </div>
            <br />
            <div>
              {" "}
              <p>${price}</p>
            </div>
          </div>

          <button className="addToCartButton" onClick={() => addToCart(id)}>
            Add to Cart {cartItemAmount > 0 ? cartItemAmount : ""}
          </button>
        </div>
      </React.Fragment>
    </div>
  );
}

export default Product;
