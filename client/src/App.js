import { Route, Routes } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import About from "./pages/About";
import Home from "./pages/Home";
import VerifyCertificateNum from "../components/users/VerifyCertificateNum";

function App (){
	return (
		<div>
			{/* <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		
	</Routes> */}
	{/* <About/>
	<Home /> */}
	<VerifyCertificateNum/>
		</div>
	);
}

export default App;
