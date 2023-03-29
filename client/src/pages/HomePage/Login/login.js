import React, { useState } from "react";
import "./login.css";
import login_sub_image from "./outreach.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Login() {
	const [userData, setUserData] = useState({ username: " ", password: " " });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userData.username === "valid_username" && userData.password === "valid_password") {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  };
	// const [username, setUsername] = useState("");
	// const [password, setPassword] = useState("");
	// const [loading, setLoading] = useState(false);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	if (
	// 		axios
	// 			.post("https://starter-kit-nqe2.onrender.com/api/", subFormDate)
	// 			.then((res) => {
	// 				console.log(res.data);
	// 				alert("Signup successful!");

	// 				setSubFormDate({
	// 					email: "",
	// 					username: "",
	// 					role: "",
	// 					password: "",
	// 				});
	// 			})
	// 	) {
	// 		navigate("/");
	// 	}

	// const handleSubmit = async (event) => {
	// 	event.preventDefault();
	// 	if (username || !password) {
	// 		return toast.error("Please provide email and password");
	// 	}
	// 	try {
	// 		setLoading(true);
	// 		const { data } = await axios.post("/api", {
	// 			username,
	// 			password,
	// 		});
	// 		setLoading(false);
	// 		toast.success(data.message);
	// 	} catch (err) {
	// 		setLoading(false);
	// 		toast.error(
	// 			err.response && err.response.data.message
	// 				? err.response.data.message
	// 				: err.message
	// 		);
	// 	}
	// };
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
							value={userData.username}
							required
							onChange={(event) =>
								setUserData({ ...userData, username: event.target.value })
							}
						/>
						<label htmlFor="psw">
							<b>Password</b>
						</label>
						<input
							type="password"
							placeholder="Enter Password"
							name="psw"
							value={userData.password}
							required
							onChange={(event) =>
								setUserData({ ...userData, password: event.target.value })
							}
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
