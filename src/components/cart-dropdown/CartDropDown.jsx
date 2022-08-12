import React, { useContext } from "react";
import Button from "../button/Button.component";
import { CartContext } from "../context/CartContext";
import CartItem from "../cart-item/CartItem.component";
import "./CartDropDown.scss";
export default function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Add To Cart </Button>
    </div>
  );
}
