import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navBarContainer">
      <div className="shopDiv">
        <h4>
          <Link className="navLinks" to="/">
            My Shop
          </Link>
        </h4>
      </div>
      <Link className="navLinks" to="/cart">
        Cart
      </Link>
    </div>
  );
}

export default Navbar;
