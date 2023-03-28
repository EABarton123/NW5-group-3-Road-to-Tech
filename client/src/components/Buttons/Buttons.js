import React from "react";
import Styles from "./Buttons.module.css";
const Button = ({ onClick, Type = "button", text }) => {
	return (
		<button className={Styles.button} type={Type} onClick={onClick}>
			{text}
		</button>
	);
};
export default Button;
