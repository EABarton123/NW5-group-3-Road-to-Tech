import SearchJobs from "../JobsList/SearchJobs";
import "./GradJobs.css";
import { useState, useEffect } from "react";
import axios from "axios";

function GradJobs() {
	const [jobs, setJobs] = useState([]);
	useEffect(() => {
		axios
			.get("https://starter-kit-nqe2.onrender.com/api/job")
			.then((response) => {
				setJobs(response.jobs);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div>
			<SearchJobs jobs={jobs} />
		</div>
	);
}

export default GradJobs;
