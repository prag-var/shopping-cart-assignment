import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, checkout, ...otherProps }) => {
  return (
    <button  {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
