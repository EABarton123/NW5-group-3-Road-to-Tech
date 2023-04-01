import JobForm from "../JobForm/JobForm";
import SearchJobs from "../JobsList/SearchJobs";
import { useState, useEffect } from "react";
import axios from "axios";

function AdminJobs() {
	const [jobs, setJobs] = useState([]);

	const postJob = async (formData) => {
		const originalJobs = { ...jobs };

		try {
			setJobs({ ...jobs, formData });

			await axios.post("https://starter-kit-nqe2.onrender.com/api/job", {
				...formData,
			});
		} catch (err) {
			console.log({ err });
			setJobs(originalJobs);
		}
	};

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
			<JobForm updateJobs={postJob} />
		</div>
	);
}

export default AdminJobs;
