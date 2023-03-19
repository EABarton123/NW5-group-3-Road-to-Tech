import React, { useState } from "react";
import "./SearchJobs.css";
import SingleJobListing from "./SingleJobListing";

function SearchJobs() {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, "0");
	const day = String(today.getDate()).padStart(2, "0");

	const formattedDate = `${year}-${month}-${day}`;

	const jobsArr = [
		{
			title: "job role",
			type: "",
			description: "",
			responsibilities: "",
			numberOfGitCommits: "",
			codewarKataLevel: "",
			codewarPoints: "",
			category: "",
			salaryRange: "",
			contactName: "",
			contactEmail: "",
			contactPhone: "",
			companyName: "",
			companyWebSite: "",
			companyLogo: "",
			requirements: "",
			postingDate: formattedDate,
			applicationsDeadline: "",
			numberOfStudentsCanApply: "",
		},
		{
			title: "dev",
			type: "",
			description: "",
			responsibilities: "",
			numberOfGitCommits: "",
			codewarKataLevel: "",
			codewarPoints: "",
			category: "",
			salaryRange: "",
			contactName: "",
			contactEmail: "",
			contactPhone: "",
			companyName: "",
			companyWebSite: "",
			companyLogo: "",
			requirements: "",
			postingDate: formattedDate,
			applicationsDeadline: "",
			numberOfStudentsCanApply: "",
		},
	];

	const [jobs, setJobs] = useState(jobsArr);
	const [selectedJob, setSelectedJob] = useState({});

	const handleSubmit = (event) => {
		const search = event.target.value;
		event.preventDefault();
		if (search === "") {
			setJobs(jobsArr);
			return;
		}
		// Filter the job listings based on the search term
		const filteredJobs = jobsArr.filter((job) =>
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
