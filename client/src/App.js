import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./App.css";
import CustomHeader from "./pages/NavBar/customHeader";
import Home from "./pages/HomePage/Home";
import "./pages/HomePage/Slide/content.css";
import AdminJobs from "./pages/AdminDashboard/AdminJobs";
import GradJobs from "./pages/GradDashboard/GradJobs";
import VerifyCertificateNum from "./pages/VerifyCertNum/VerifyCertificateNum";
import { Signup } from "./pages/SignUp/Signup";
import JobForm from "./pages/JobForm/JobForm";
class App extends Component {
	MenuItemTexts = [];
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
						<Route path="/job" element={<JobForm />} />
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;
