import React from "react";
import side_image from "./cititec-class.jpg";
import "./content.css";

function Slide() {
	return (
		<div className="content">
			<img
				className="image_content"
				src={side_image}
				alt="content"
				width={170}
				height={70}
			></img>
		</div>
	);
}

export default Slide;
