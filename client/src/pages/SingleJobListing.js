import React from "react";

function SingleJobListing({ job }) {
 const { id,
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
	numberOfStudentsCanApply } = job;
	return (
		<div>
			<div key={id}>
				<h2>title: {title}</h2>
				<p>type: {type}</p>
				<p>description: {description}</p>
				<p>category: {category}</p>
				<p>link: {companyWebSite}</p>
				<p>requirements: {requirements}</p>
				<p>posting date: {postingDate}</p>
				<p>deadline: {applicationsDeadline}</p>
				<p>
					number of students application can take: {numberOfStudentsCanApply}
				</p>
				<p>salary: {salaryRange}</p>
				<p>company: {companyName}</p>
				<p>responsibilities: {responsibilities}</p>
				<p>number of git commits: {numberOfGitCommits}</p>
				<p>codewar kata level: {codewarKataLevel}</p>
				<p>codewar points: {codewarPoints}</p>
				<p>contact name: {contactName}</p>
				<p>contact email: {contactEmail}</p>
				<p>contact phone number: {contactPhone}</p>
			</div>
		</div>
	);
}
export default SingleJobListing;
