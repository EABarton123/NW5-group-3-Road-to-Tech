import React from "react";
import "./Buttons.css";


const Button = ({ onClick, Type = "button" }) => {
  return (
    <button type={Type} onClick={onClick}>
      SIGN UP
    </button>
  );
};
export default Button;