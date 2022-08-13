import React from "react";
import "./Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Checkount() {
  const { cartItems, addItemToCart, removeCartItem } = useContext(CartContext);

  return (
    <div>
      <h1> Checkout </h1>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2> {name} </h2>
              <span> {quantity} </span>
              <span onClick={() => removeCartItem(cartItem)}>decriment </span>
              <span onClick={() => addItemToCart(cartItem)}>incriment </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
