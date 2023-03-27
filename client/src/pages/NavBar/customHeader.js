import { Link } from "react-router-dom";
import React from "react";
import MenuItem from "./menuItem";
import SignupMenu from "./SignUpMenu/signupMenu";
import "./menu.css";
import "./customMenu.css";
import "./menuItem.css";
import logo from "./cyf_logo.png";

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
