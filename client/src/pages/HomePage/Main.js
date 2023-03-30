import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainCSS from "./Main.module.css";

function Main() {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!email || !password) {
			return toast.error("Please provide username and password");
		}
		try {
			setLoading(true);
			const { data } = await axios.post("/api/login", {
				email,
				password,
				role,
			});
			setLoading(false);
			toast.success(data.message);
			{
				if (role === "graduate") {
					return navigate("/grad");
				}
				if (role.toLowerCase() === "admin") {
					return navigate("/admin");
				}
			}
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
		<main className={MainCSS.main}>
			<ToastContainer position="bottom-center" limit={1} />
			<div className={MainCSS.photo}>
				<img
					className={MainCSS.photo1}
					src="https://codeyourfuture.io/wp-content/uploads/2022/03/cyf-class-in-session.jpg"
					alt="CodeYourFuture class in session"
				/>
			</div>
			<div className={MainCSS.right}>
				<div className={MainCSS.login}>
					<h2 className={MainCSS.logh2}>LOG IN</h2>
					<form className={MainCSS.mainform} onSubmit={handleSubmit}>
						<label className={MainCSS.labelform} htmlFor="email">
							Email:
						</label>
						<input
							className={MainCSS.inputemail}
							type="email"
							id="email"
							name="email"
							required
							onChange={(event) => setEmail(event.target.value)}
						/>

						<label className={MainCSS.labelform} htmlFor="password">
							Password:
						</label>
						<input
							className={MainCSS.inputpassword}
							type="password"
							id="password"
							name="password"
							required
							onChange={(event) => setPassword(event.target.value)}
						/>
						<label>
							<input
								type="radio"
								value="graduate"
								// checked={setRole === "graduate"}
								onChange={(event) => setRole(event.target.value)}
							/>
							Graduate
						</label>
						<label>
							<input
								type="radio"
								value="admin"
								// checked={setRole === "admin"}
								onChange={(event) => setRole(event.target.value)}
							/>
							Admin
						</label>

						<button
							className={MainCSS.formbutton}
							type="submit"
							disabled={loading}
						>
							{loading ? "Sending ..." : "Login"}
						</button>
					</form>
				</div>
				<div className={MainCSS.video1}>
					<iframe
						width="100%"
						height="178"
						src="https://www.youtube.com/embed/jz87O1kap7s"
						title="Code Your Future"
					></iframe>
				</div>
			</div>
		</main>
	);
}

export default Main;
