import React, { useState } from "react";
import "./login.css";
import login_sub_image from "./outreach.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (username || !password) {
			return toast.error("Please provide email and password");
		}
		try {
			setLoading(true);
			const { data } = await axios.post("/api", {
				username,
				password,
			});
			setLoading(false);
			toast.success(data.message);
		} catch (err) {
			setLoading(false);
			toast.error(
				err.response && err.response.data.message
					? err.response.data.message
					: err.message
			);
		}
	};
	return (
		<>
			<div className="login_image_box">
				<ToastContainer position="bottom-center" limit={1} />
				<form onSubmit={handleSubmit}>
					<div className="container">
						<label htmlFor="uname">
							<b>Username</b>
						</label>
						<input
							type="text"
							placeholder="Enter Username"
							name="uname"
							value={username}
							required
							onChange={(event) => setUsername(event.target.value)}
						/>
						<label htmlFor="psw">
							<b>Password</b>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="psw"
							value={password}
							required
							onChange={(event) => setPassword(event.target.value)}
						></input>
						<button
							disabled={loading}
							type="submit"
							className="btn btn-secondary"
						>
							{loading ? "Sending ..." : "Submit"}
						</button>
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
