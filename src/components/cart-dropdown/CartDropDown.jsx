import React from "react";
import Button from "../button/Button.component";
import "./CartDropDown.scss";
export default function CartDropDown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Add To Cart </Button>
    </div>
  );
}
