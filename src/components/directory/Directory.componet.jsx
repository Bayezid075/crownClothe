import React from "react";
import CategoryItem from "../categoris-items/Category-item.component";
import "./Directory.styles.scss";
export default function Directory({ category }) {
  return (
    <div className="categories-container">
      {category.map((ctg) => (
        <CategoryItem id={ctg.id} title={ctg.title} imageUrl={ctg.imageUrl} />
      ))}
    </div>
  );
}
