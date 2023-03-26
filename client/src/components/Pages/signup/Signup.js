import React, { useState } from "react";
import Button from "../../Buttons/Buttons";
import "./Signup.css";
import axios from "axios";

export const Signup = () => {
	const [subFormDate, setSubFormDate] = useState({
		email: "",
		username: "",
		role: "",
		password: "",
	});
	// console.log(subFormDate);
	// console.log(setSubFormDate)

	const signupSubmit = (e) => {
		e.preventDefault();
		// console.log("subFormDate");

		axios
			.post("http://localhost:3000/api/signup", subFormDate)
			.then((res) => {
				console.log(res.data);
				alert("Signup successful!");

				setSubFormDate({
					email: "",
					username: "",
					role: "",
					password: "",
				});
			})
			.catch((err) => {
				console.error(err);
				alert("Signup failed. Please try again later.");
			});
	};
	return (
		<div className="form-conteiner">
			<form onSubmit={signupSubmit}>
				<h1> Graduate Sign Up</h1>
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
					<label htmlFor="role"> Role:</label>
					<input
						onChange={(e) =>
							setSubFormDate({
								...subFormDate,
								role: e.target.value,
							})
						}
						type="radio"
						value="Admin"
						name="role"
					/>{" "}
					Admin
					<input
						onChange={(e) =>
							setSubFormDate({
								...subFormDate,
								role: e.target.value,
							})
						}
						type="radio"
						value="Graduate"
						name="role"
					/>{" "}
					Graduate
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
				<Button Type={"submit"} text={"Sign Up"} />
			</form>
		</div>
	);
};
