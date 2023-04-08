import React from "react";
// import GradAppliedJobs from "../GradAppliedJobs";
import "./SingleJobListing.css";

function SingleJobListing({ job }) {
	const {
		id,
		company_logo,
		title,
		type,
		description,
		responsibilities,
		number_of_gitcommits,
		codewar_kata_level,
		codewar_points,
		codality_test_points,
		category,
		salary_range_max,
		salary_range_min,
		contact_name,
		contact_email,
		contact_phone,
		company_name,
		company_web_site,
		requirements,
		applications_deadline,
		number_of_students_can_apply,
	} = job;

	function handleClick() {
		window.location.href = job.company_web_site;
	}

	return (
		<div className="single_container">
			<div key={id}>
				<img src={company_logo} alt="company logo"></img>
				<h2>Title: {title}</h2>
				<p>Type: {type}</p>
				<p>Description: {description}</p>
				<p>Category: {category}</p>
				<p>Link: {company_web_site}</p>
				<p>Requirements: {requirements}</p>
				<p>Deadline: {applications_deadline}</p>
				<p>
					Number of students application can take:{" "}
					{number_of_students_can_apply}
				</p>
				<p>
					Salary: Min:{salary_range_min} - Max: {salary_range_max}
				</p>
				<p>Company: {company_name}</p>
				<p>Responsibilities: {responsibilities}</p>
				<p>Number of git commits: {number_of_gitcommits}</p>
				<p>Codewars kata level: {codewar_kata_level}</p>
				<p>Codewars points: {codewar_points}</p>
				<p>Codility test points: {codality_test_points}</p>
				<p>Contact name: {contact_name}</p>
				<p>Contact email: {contact_email}</p>
				<p>Contact phone number: {contact_phone}</p>
				<button onClick={handleClick} type="Submit">
					APPLY
				</button>
			</div>
		</div>
	);
}
export default SingleJobListing;
