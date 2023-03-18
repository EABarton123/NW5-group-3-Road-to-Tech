import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import GradJobs from "./pages/GradJobs";
import AdminJobs from "./pages/AdminJobs";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/grad/logged/in" element={<gradJobs />} />
		<Route path="/admin/logged/in" element={<AdminJobs />} />
	</Routes>
);

export default App;
