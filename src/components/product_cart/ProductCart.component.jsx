import React from "react";
import Button from "../button/Button.component";
import "./ProductCard.styles.scss";

export default function ProductCart({ product }) {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button ButtonType="inverted"> Add To Cart </Button>
    </div>
  );
}
