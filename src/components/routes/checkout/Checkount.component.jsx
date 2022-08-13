import React from "react";
import "./Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckOutItem from "../../checkout-item/CheckOutItem";

export default function Checkount() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span> Product </span>
        </div>{" "}
        <div className="header-block">
          <span> Description </span>
        </div>{" "}
        <div className="header-block">
          <span> quantity </span>
        </div>{" "}
        <div className="header-block">
          <span> Price </span>
        </div>
        <div className="header-block">
          <span> Remove </span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        const { id } = cartItem;
        return <CheckOutItem key={id} cartItem={cartItem} />;
      })}
      <span className="total"> Total : 0 </span>
    </div>
  );
}
