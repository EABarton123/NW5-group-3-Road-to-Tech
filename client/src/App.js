import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import AdminJobs from "./pages/AdminJobs";
import GradJobs from "./pages/GradJobs";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/admin/logged/in" element={<AdminJobs />} />
		<Route path="/grad/logged/in" element={<GradJobs />} />
	</Routes>
);

export default App;
