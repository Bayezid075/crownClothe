import React from "react";
import "./Button.styles.scss";
const button_class_types = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, ButtonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${button_class_types[ButtonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
