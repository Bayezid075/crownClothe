import React, { useContext } from "react";
import Button from "../button/Button.component";
import "./ProductCard.styles.scss";
import { CartContext } from "../context/CartContext";

export default function ProductCart({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addCartItem = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>

      <Button ButtonType="inverted" onClick={addCartItem}>
        {" "}
        Add To Cart{" "}
      </Button>
    </div>
  );
}
