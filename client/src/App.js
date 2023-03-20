import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import CustomHeader from "./components/customHeader"; //Include Heder

class App extends Component {
	MenuItemTexts = ["STORIES", "INTERVIEW TIPS", "GRADUATE RESOURCES"];
	render() {
		return (
			<div className="maincontainer">
				<CustomHeader MenuItemTexts={this.MenuItemTexts}></CustomHeader>
			</div>
		);
	}
}
=========
import About from "./pages/About";
import Home from "./pages/Home";
import AdminJobs from "./pages/AdminJobs";
import GradJobs from "./pages/GradJobs";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/admin" element={<AdminJobs />} />
		<Route path="/grad" element={<GradJobs />} />
	</Routes>
);
>>>>>>>>> Temporary merge branch 2

export default App;
