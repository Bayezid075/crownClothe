import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../shopping-bag.svg";
import "./Cart.scss";
import { CartContext } from "../context/CartContext";
export default function Cart() {
  const { isCartOpen, setisCartOpen, cartCount } = useContext(CartContext);

  const cartopenHandler = () => setisCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={cartopenHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount} </span>
    </div>
  );
}
