// import JobForm from "../JobForm/JobForm";
import SearchJobs from "../JobsList/SearchJobs";
// import { useState, useEffect } from "react";
// import axios from "axios";

function AdminJobs() {
	// const [jobs, setJobs] = useState([]);

	// const postJob = async (formData) => {
	// 	const originalJobs = { ...jobs };

	// 	try {
	// 		setJobs({ ...jobs, formData });

	// 		await axios.post("/api/job", {
	// 			...formData,
	// 		});
	// 	} catch (err) {
	// 		console.log({ err });
	// 		setJobs(originalJobs);
	// 	}
	// };

	// useEffect(() => {
	// 	axios
	// 		.get("/api/job")
	// 		.then((response) => {
	// 			setJobs(response.jobs);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, []);

	return (
		<div>
			<SearchJobs />
			{/* <JobForm /> */}
		</div>
	);
}

export default AdminJobs;
