import { create } from "canvas-confetti";
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setcartItems] = useState();
  const [totalPrice, settotalPrice] = useState();
  const [totalQuantities, settotalQuantities] = useState();
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);

    const decQty = () => {
      setQty((prevQty) => prevQty - 1);
    };
  };

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
      }}
    >
      {children}
    </Context.Provider>
  );
};
