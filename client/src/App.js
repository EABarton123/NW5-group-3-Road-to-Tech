import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import SearchJobs from "./pages/SearchJobs";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
		<Route path="/search/jobs" element={<SearchJobs />} />
	</Routes>
);

export default App;
