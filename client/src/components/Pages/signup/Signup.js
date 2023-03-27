import React, { useState } from "react";
import Button from "../../Buttons/Buttons";
import "./Signup.css";
import axios from "axios";

export const Signup = () => {
	const [subFormDate, setSubFormDate] = useState({
		email: "",
		username: "",
		password: "",
	});

	const signupSubmit = async (e) => {
		e.preventDefault();
		console.log("subFormDate");

		const backendURL = "http://localhost:3000/api/signup/grads,";
		const response = await axios.post(backendURL, { subFormDate });
		console.log(response);

		setSubFormDate({
			email: "",
			username: "",
			password: "",
		});
	};
	return (
		<div className="form-conteiner">
			<form onSubmit={(e) => signupSubmit(e)}>
				<h1>SIGN UP</h1>
				<div>
					<label htmlFor="email"> Email: </label>
					<input
						type="text"
						placeholder="Enter Email"
						name="email"
						required
						value={subFormDate.email}
						onChange={(e) =>
							setSubFormDate({
								...subFormDate,
								email: e.target.value,
							})
						}
					/>
				</div>
				<div>
					<label htmlFor="userName"> User Name:</label>
					<input
						type="text"
						placeholder="Enter User Name"
						name="username"
						required
						value={subFormDate.username}
						onChange={(e) =>
							setSubFormDate({
								...subFormDate,
								username: e.target.value,
							})
						}
					/>
				</div>
				<div>
					<label htmlFor="password"> Password:</label>
					<input
						type="password"
						placeholder="Enter Password"
						name="password"
						required
						value={subFormDate.password}
						onChange={(e) =>
							setSubFormDate({
								...subFormDate,
								password: e.target.value,
							})
						}
					/>
				</div>
				<Button Type={"submit"} text={"SIGN UP"} />
			</form>
		</div>
	);
};
