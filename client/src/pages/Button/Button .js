import React from "react";
import "./Button.css";

const Button  = ({ onClick, Type = "button",text }) => {
  return (
    <button type={Type} onClick={onClick}>
    {text}
  </button >
  );
};

export default Button;