import React from "react";
import "./CheckOutItem.scss";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CheckOutItem({ cartItem }) {
  const { clearItemFromCheckout, addItemToCart, removeCartItem } =
    useContext(CartContext);
  const CheckoutClearItem = () => {
    clearItemFromCheckout(cartItem);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeCartItem(cartItem);
  };

  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div onClick={removeItemHandler} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={addItemHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">${price} </span>
      <span onClick={CheckoutClearItem} className="remove-button">
        &#10005;
      </span>
    </div>
  );
}
