import MenuItem from "./menuItem";
import SignupMenu from "./signupMenu";
import React from "react";
import "../assets/css/menu.css";
import "../assets/css/customMenu.css";
import "../assets/css/menuItem.css";
import logo from "../assets/css/cyf_logo.png";
import { Link } from "react-router-dom";

function CustomHeader({ MenuItemTexts }) {
	return (
		<div className="MenuRow">
			<Link to="/">
				<img
					style={{
						marginRight: "100px",
						marginLeft: "10px",
						padding: 0,
						borderRadius: 15,
					}}
					width={190}
					height={70}
					src={logo}
					alt="logo"
				></img>
			</Link>

			{MenuItemTexts.map((item) => {
				return (
					<div key={item} id={item}>
						<MenuItem menuText={item} />
					</div>
				);
			})}

			<SignupMenu />
		</div>
	);
}
export default CustomHeader;
