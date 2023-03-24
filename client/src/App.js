import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import CustomHeader from "./components/customHeader"; //Include Heder
import Home from "./pages/Home";
import "./assets/css/content.css";
import AdminJobs from "./pages/AdminJobs";
import GradJobs from "./pages/GradJobs";
import VerifyCertificateNum from "../components/users/VerifyCertificateNum";
import { Signup } from "./components/Pages/signup/Signup";
import SignUp from "./pages/SignUp/SignUp";
import JobForm from "./pages/JobForm/JobForm";

class App extends Component {
	MenuItemTexts = ["STORIES", "INTERVIEW TIPS", "GRADUATE RESOURCES"];
	render() {
		return (
			<div>
				<div className="maincontainer">
					<CustomHeader MenuItemTexts={this.MenuItemTexts}></CustomHeader>
				</div>
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/admin" element={<AdminJobs />} />
						<Route path="/grad" element={<GradJobs />} />
						<Route path="/verify" element={<VerifyCertificateNum />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/signupadmin" element={<SignUp />} />
						<Route path="/job" element={<JobForm />} />
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;
