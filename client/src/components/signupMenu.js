import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/signupMenu.css";

function SignupMenu() {
	return (
		<div className="dropdown" style={{ marginLeft: "40px" }}>
			<button className="dropbtn">SIGN UP</button>
			<div className="dropdown-content">
				<Link to="/admin">EMPLOYABILITY</Link>
				<Link to="/grad">GRADUATE</Link>
			</div>
		</div>
	);
}

export default SignupMenu;
