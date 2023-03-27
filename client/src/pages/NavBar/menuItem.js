import React from "react";
import "./menuItem.css";
import "./customMenu.css";

function MenuItem({ menuText }) {
	return (
		<div className="Box">
			<div className="box1">
				{" "}
				<a href="menu">{menuText}</a>
			</div>
		</div>
	);
}

export default MenuItem;
