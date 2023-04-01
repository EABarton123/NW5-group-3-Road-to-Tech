import React from "react";
// import GradAppliedJobs from "../GradAppliedJobs";

function SingleJobListing({ job }) {
	const {
		id,
		title,
		type,
		description,
		responsibilities,
		numberOfGitCommits,
		codewarKataLevel,
		codewarPoints,
		category,
		salaryRange,
		contactName,
		contactEmail,
		contactPhone,
		companyName,
		companyWebSite,
		requirements,
		postingDate,
		applicationsDeadline,
		numberOfStudentsCanApply,
	} = job;

	console.log(job);

	function handleClick() {
		window.location.href = job.companyWebSite;
	}

	return (
		<div>
			<div key={id}>
				<h2>Title: {title}</h2>
				<p>Type: {type}</p>
				<p>Description: {description}</p>
				<p>Category: {category}</p>
				<p>Link: {companyWebSite}</p>
				<p>Requirements: {requirements}</p>
				<p>Posting Date: {postingDate}</p>
				<p>Deadline: {applicationsDeadline}</p>
				<p>
					Number of students application can take: {numberOfStudentsCanApply}
				</p>
				<p>Salary: {salaryRange}</p>
				<p>Company: {companyName}</p>
				<p>Responsibilities: {responsibilities}</p>
				<p>Number of git commits: {numberOfGitCommits}</p>
				<p>Codewars kata level: {codewarKataLevel}</p>
				<p>Codewars points: {codewarPoints}</p>
				<p>Contact name: {contactName}</p>
				<p>Contact email: {contactEmail}</p>
				<p>Contact phone number: {contactPhone}</p>
				<button onClick={handleClick} type="Submit">
					APPLY
				</button>
				{/* <GradAppliedJobs job={job} /> */}
			</div>
		</div>
	);
}
export default SingleJobListing;
