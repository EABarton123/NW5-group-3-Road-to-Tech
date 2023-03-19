import React from "react";
import "../assets/css/signupMenu.css";
function SignupMenu() {
	return (
		<div className="dropdown" style={{ marginLeft: "40px" }}>
			<button className="dropbtn">SIGN UP</button>
			<div className="dropdown-content">
				<a href="grad">GRADUATE</a>
				<a href="emp">EMPLOYABILITY</a>
			</div>
		</div>
	);
}

export default SignupMenu;
