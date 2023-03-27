import React, { useState } from "react";
import "./VerifyCertificateNum.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link } from "react-router-dom";

export function VerifyCertificateNum() {
	const [email, setEmail] = useState("");
	const [certificateNum, setCertificateNum] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!email || !certificateNum) {
			return toast.error("Please provide email and certificate Number");
		}
		try {
			setLoading(true);
			const { data } = await axios.post(
				"https://starter-kit-nqe2.onrender.com//api/verify",
				{
					email,
					certificateNum,
				}
			);
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
		<div className="signUpInfoContainer">
			<ToastContainer position="bottom-center" limit={1} />
			<h2 className="signUpHeader"> Sign Up As A Graduate </h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email"> Email</label>
					<br></br>
					<input
						// required
						type="email"
						value={email}
						placeholder="Enter Email address"
						onChange={(event) => setEmail(event.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="certificateNumber">
						{" "}
						Graduation Certificate Number
					</label>
					<br></br>
					<input
						// required
						type="text"
						placeholder="Enter Certificate Number"
						value={certificateNum}
						onChange={(event) => setCertificateNum(event.target.value)}
					/>
				</div>

				<div id="certificateNumHelp">
					We will never share your certificate number with anyone else.
				</div>

				<div>
					<button
						disabled={loading}
						type="submit"
						className="btn btn-secondary"
					>
						{loading ? "Sending ..." : "Submit"}
						<Link to="/signup">Sign Up</Link>
					</button>
				</div>
			</form>
		</div>
	);
}
export default VerifyCertificateNum;
