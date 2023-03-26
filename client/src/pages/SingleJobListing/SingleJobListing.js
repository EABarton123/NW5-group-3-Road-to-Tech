import React from "react";
import "./SingleJobListing.css";
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

	function handleClick() {
		window.location.href = job.companyWebSite;
	}

	return (
		<div className=" form">
			<div key={id}>
				<div className="container">
				<h2 className="title">Title: {title}</h2>
				<p>Type: {type}</p>
				<p className="card1">Description: {description}</p>
				<p className="card1">Responsibilities: {responsibilities}</p>
				<p className="card1">Requirements: {requirements}</p>
				<p>Category: {category}</p>
				<p>Link: {companyWebSite}</p>
				<p>Posting Date: {postingDate}</p>
				<p>Deadline: {applicationsDeadline}</p>
				<p>Number of students application can take: {numberOfStudentsCanApply}</p>
				<p>Salary: {salaryRange}</p>
				<p>Company: {companyName}</p>

				<p>Number of Git Commits: {numberOfGitCommits}</p>
				<p>Nodewar Kata Level: {codewarKataLevel}</p>
				<p>Codewar Points: {codewarPoints}</p>
				<p>Contact Name: {contactName}</p>
				<p>Contact Email: {contactEmail}</p>
				<p>Contact Phone Number: {contactPhone}</p>
				</div>
				<button onClick={handleClick} type="Submit">
					Apply
				</button>
			</div>
		</div>
	);
}
export default SingleJobListing;
