import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { Toast } from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "./../lib/client";
import { TiDeleteOutline } from "react-icons/ti";
import { createConfigItemAsync } from "@babel/core/lib/config";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();
  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick="">
          <AiOutlineLeft onClick={() => setShowCart(false)} />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3> Your Shopping Cart is Empty</h3>
            <Link href="/">
              <button
                type="button"
                className="btn"
                onClick={() => setShowCart(false)}
              >
                {" "}
                Continue Shopping{" "}
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  alt=""
                  className="product-image"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
