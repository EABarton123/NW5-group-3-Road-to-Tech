import React from "react";
import "../assets/css/login.css";
import login_sub_image from "../assets/css/outreach.jpg";
function Login() {
	return (
		<>
			<div className="login_image_box">
				<form>
					<div className="container">
						<label htmlFor="uname">
							<b>Username</b>
						</label>
						<input
							type="text"
							placeholder="Enter Username"
							name="uname"
							required
						/>
						<label htmlFor="psw">
							<b>Password</b>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="psw"
							required
						></input>
						<button type="submit">Login</button>
						<label>
							<input type="checkbox" checked="checked" name="remember" />{" "}
							Remember me
						</label>
					</div>
					<div className="container">
						<button type="button" className="cancelbtn">
							Cancel
						</button>
						<span className="psw">
							Forgot <a href="psw">password?</a>
						</span>
					</div>
				</form>
				<img src={login_sub_image} alt="log" height={200}></img>
			</div>
		</>
	);
}

export default Login;
