import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
import Button from "./Button/Button";

const SignUp = () => {
	const [dataForm, setDataForm] = useState({
		email: "",
		employerId: "",
		userName: "",
		password: "",
	});

	const SignUpForm = async (e) => {
		e.preventDefault();
		console.log("Clicked");

		const backendURL = "http://localhost:3000/api/signup/grads";
		const response = await axios.post(backendURL, { dataForm });
		console.log(response);

		// clear the fields
		setDataForm({
			email: "",
			employerId: "",
			userName: "",
			password: "",
		});
	};
	return (
		<div>
			<form onSubmit={(e) => SignUpForm(e)}>
				<h1>Sign Up</h1>
				<div>
					<label htmlFor="email"> Email:</label>
					<input
						type="text"
						placeholder="Enter Email"
						name="email"
						required
						value={dataForm.email}
						onChange={(e) =>
							setDataForm({ ...dataForm, email: e.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor="text">Employer Id: </label>
					<input
						type="number"
						placeholder="Enter Employer Id"
						name="employerId"
						required
						value={dataForm.employerId}
						onChange={(e) =>
							setDataForm({ ...dataForm, employerId: e.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor="text">User Name:</label>
					<input
						type="text"
						placeholder="Enter User Name"
						name="userName"
						required
						value={dataForm.userName}
						onChange={(e) =>
							setDataForm({ ...dataForm, userName: e.target.value })
						}
					/>
				</div>
				<div>
					<label htmlFor="text">Password:</label>
					<input
						type="password"
						placeholder=" Enter Password"
						name="password"
						required
						value={dataForm.password}
						onChange={(e) =>
							setDataForm({ ...dataForm, password: e.target.value })
						}
					/>
				</div>
				<Button Type={"submit"} text={"SIGNUP"} />
			</form>
		</div>
	);
};

export default SignUp;
