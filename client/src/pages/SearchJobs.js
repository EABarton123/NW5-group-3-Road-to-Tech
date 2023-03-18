import React, { useState } from "react";
import SingleJobListing from "./SingleJobListing";

function SearchJobs(props) {
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
	const [selectedJob, setSelectedJob] = useState(jobs);

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
		setSelectedJob(job);
	}

	return (
		<div id="div-main">
			<div id="div-left">
				<form>
					<input
						type="text"
						placeholder="Search Jobs"
						onChange={handleSubmit}
					/>
				</form>
				{jobs.map((job) => (
					<div key={job.id}>
						<h2>title: {job.title}</h2>
						<p>type: {job.type}</p>
						<p>description: {job.description}</p>
						<p>category: {job.category}</p>
						<p>salary: {job.salaryRange}</p>
						<p>company: {job.companyName}</p>
						<button
							onSubmit={() => {
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
				<SingleJobListing {...selectedJob} />
			</div>
		</div>
	);
}

export default SearchJobs;
