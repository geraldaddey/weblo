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
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onDelete,
  } = useStateContext();

  const updateItemNumber = () => {
    console.log(cartItems);
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick="">
          <AiOutlineLeft onClick={() => setShowCart(false)} />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {/* render message prompt when cart is empty  */}
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
        {/* display cart when there are items in the cart  */}
        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item, index) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  alt=""
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5> {item.name} </h5>
                    <h4>${item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onDelete()}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3> Subtotal: </h3>
              <h3> ${totalPrice} </h3>
            </div>
            <div className="btn-container">
              {/* Pay with PayStack  */}
              <button
                type="button"
                className="btn"
                onClick={() => console.log("Integrate with Payment Gateway")}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
