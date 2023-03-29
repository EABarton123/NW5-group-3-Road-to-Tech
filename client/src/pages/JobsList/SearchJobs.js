import { useState, useEffect } from "react";
import "./SearchJobs.css";
import SingleJobListing from "./SingleJobListing";
import axios from "axios";

function SearchJobs({ jobId }) {
	// const [data, setData] = useState([]);
	const [jobs, setJobs] = useState([]);
	const [selectedJob, setSelectedJob] = useState({});

	useEffect(() => {
		axios
			.get("https://starter-kit-nqe2.onrender.com/api/job/")
			// .then((response) => response.json())
			.then((data) => setJobs(data))
			.catch((error) => console.error(error));
	}, [jobId]);

	// useEffect(() => {
	// 	axios
	// 		.get("https://starter-kit-nqe2.onrender.com/api/job")
	// 		.then((response) => {
	// 			setData(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, []);

	const handleSubmit = (event) => {
		const search = event.target.value;
		event.preventDefault();
		if (search === "") {
			setJobs(jobs);
			return;
		}
		// Filter the job listings based on the search term
		const filteredJobs = jobs.filter((job) =>
			job.title.toLowerCase().includes(search.toLowerCase())
		);
		setJobs(filteredJobs);
	};

	function handleJobExpand(job) {
		console.log(job);
		setSelectedJob(job);
	}

	return (
		<div id="div-main">
			<div id="div-left">
				<form id="searchbar">
					<input
						type="text"
						placeholder="Search Jobs"
						onChange={handleSubmit}
					/>
				</form>
				{jobs.map((job) => (
					<div key={job.id} id="job-card">
						<h2>title: {job.title}</h2>
						<p>description: {job.description}</p>
						<p>category: {job.category}</p>
						<div id="container">
							<p id="type">{job.type}</p>
							<p id="salary">{job.salaryRange}</p>
						</div>
						<p>company: {job.companyName}</p>
						<button
							onClick={() => {
								handleJobExpand(job);
							}}
							type="Submit"
						>
							Show more information
						</button>
					</div>
				))}
			</div>
			<div id="div-right">
				<SingleJobListing job={selectedJob} />
			</div>
		</div>
	);
}

export default SearchJobs;
