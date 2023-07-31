import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="outerProductDiv">
        {PRODUCTS.map((singleProd) => {
          return (
            <React.Fragment key={singleProd.id}>
              <Product data={singleProd} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
