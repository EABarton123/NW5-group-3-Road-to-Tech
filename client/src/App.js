import { Route, Routes } from "react-router-dom";
import JobForm from "./pages/JobForm/JobForm";
import React, { Component } from "react";
import "./App.css";
import CustomHeader from "./components/customHeader"; //Include Heder
import About from "./pages/About";
import Home from "./pages/Home";
import AdminJobs from "./pages/AdminJobs";
import GradJobs from "./pages/GradJobs";
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
						<Route path="/about" element={<About />} />
						<Route path="/admin" element={<AdminJobs />} />
						<Route path="/grad" element={<GradJobs />} />
						<Route path="/job" element={<JobForm />} />
					</Routes>
				</div>
			</div>
		);
	}
}

export default App;
