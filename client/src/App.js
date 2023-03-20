import { Route, Routes } from "react-router-dom";

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

export default App;
