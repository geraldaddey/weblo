import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const setCart = () => {
    //boolean
    //if cart is available, (lenght != 0 ) show cart
    //else display ther's nothing in the cart

    console.log("cart clicked");
  };
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Weblo</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities} </span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
