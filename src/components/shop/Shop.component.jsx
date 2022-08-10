import React, { useContext } from "react";

import ProductCart from "../product_cart/ProductCart.component";
import { ProductContext } from "../context/Product";
import "./Shop.scss";

export default function Shop() {
  const { product } = useContext(ProductContext); // proper name should same as before
  return (
    <div className="products-container">
      {product.map((prd) => (
        <ProductCart product={prd} />
      ))}
    </div>
  );
}
