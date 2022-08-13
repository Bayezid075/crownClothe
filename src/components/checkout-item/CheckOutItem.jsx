import React from "react";
import "./CheckOutItem.scss";

export default function CheckOutItem({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">{quantity} </span>
      <span className="price">${price} </span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
}
