import { useState } from "react";
import "./SearchJobs.css";
import SingleJobListing from "./SingleJobListing";
import roles from "../roles.json";
const defaultJobs = roles.jobs;
function SearchJobs() {
	const [jobs, setJobs] = useState(defaultJobs);
	const [selectedJob, setSelectedJob] = useState({});

	const handleSubmit = (event) => {
		const search = event.target.value;
		event.preventDefault();
		if (search === "") {
			setJobs(defaultJobs);
			return;
		}
		// Filter the job listings based on the search term
		const filteredJobs = defaultJobs.filter((job) =>
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
						<h2>Title: {job.title}</h2>
						<p>Description: {job.description}</p>
						<p>Category: {job.category}</p>
						<div id="container">
							<p id="type">{job.type}</p>
							<p id="salary">{job.salaryRange}</p>
						</div>
						<p>Company: {job.companyName}</p>
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
