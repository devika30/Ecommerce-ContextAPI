import React, { useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = React.createContext(null);

const initialValueInCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(initialValueInCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (productId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [productId]: prevState[productId] + 1,
    }));
  };

  //cartItems=

  const deleteFromCart = (productId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [productId]: prevState[productId] - 1,
    }));
  };

  const updateValueinInput = (newValue, productId) => {
    setCartItems((prevState) => ({
      ...prevState,
      [productId]: newValue,
    }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    deleteFromCart,
    updateValueinInput,
    getTotalCartAmount
  };
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
