import React from "react";
import "./Category-item.styles.scss";

export default function CategoryItem({ id, title, imageUrl }) {
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title} </h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
