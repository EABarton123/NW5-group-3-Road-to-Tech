import JobForm from "../JobForm/JobForm";
import SearchJobs from "../JobsList/SearchJobs";
import { useState } from "react";
import axios from "axios";

function AdminJobs() {
	const [jobs, setJobs] = useState([]);

	const postJob = async (formData) => {
		const originalJobs = { ...jobs };

		try {
			setJobs({ ...jobs, formData });

			await axios.post("/api/job", {
				...formData,
			});
		} catch (err) {
			console.log({ err });
			setJobs(originalJobs);
		}
	};

	const fetchData = async () => {
		try {
			const response = await axios.get(
				"/api/job"
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	};
	// function fetchData() {
	// 	return axios
	// 		.get("https://starter-kit-nqe2.onrender.com/api/job")
	// 		.then((response) => setJobs(response.data))
	// 		.catch((error) => console.log(error));
	// }

	// useEffect(() => {
	// 	axios
	// 		.get("https://starter-kit-nqe2.onrender.com/api/job")
	// 		.then((response) => {
	// 			response.jobs;
	// 			setJobs(jobs);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, []);

	return (
		<div>
			<SearchJobs fetchData={fetchData} />
			<JobForm updateJobs={postJob} />
		</div>
	);
}

export default AdminJobs;
