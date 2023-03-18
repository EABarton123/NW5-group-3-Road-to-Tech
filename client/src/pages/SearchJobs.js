import React, { useState } from "react";

function SearchJobs() {

	const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const formattedDate = `${year}-${month}-${day}`;

  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([
		{
			title: "",
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
	]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

    const handleSearchInputDelete = () => {
			if (searchTerm.length > 0) {
				setSearchTerm("");
			}
		};

  const handleSubmit = (event) => {
    event.preventDefault();
    // Filter the job listings based on the search term
    const filteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setJobs(filteredJobs);
  };

  return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search Jobs"
					value={searchTerm}
					onChange={handleInputChange}
					onKeyDown={(event) => {
						if (event.key === "Backspace") {
							handleSearchInputDelete();
						}
					}}
				/>
				<button type="submit">Search</button>
			</form>
			{jobs.map((job) => (
				<div key={job.id}>
					<h2>title: {job.title}</h2>
					<p>type: {job.type}</p>
					<p>description: {job.description}</p>
					<p>responsibilities: {job.responsibilities}</p>
					<p>number of git commits: {job.numberOfGitCommits}</p>
					<p>codewar kata level: {job.codewarKataLevel}</p>
					<p>codewar points: {job.codewarPoints}</p>
					<p>category: {job.category}</p>
					<p>salary: {job.salaryRange}</p>
					<p>contact name: {job.contactName}</p>
					<p>contact email: {job.contactEmail}</p>
					<p>contact phone number: {job.contactPhone}</p>
					<p>company: {job.companyName}</p>
					<p>link: {job.companyWebSite}</p>
					<p>requirements: {job.requirements}</p>
					<p>posting date: {job.postingDate}</p>
					<p>deadline: {job.applicationsDeadline}</p>
					<p>
						number of students application can take:{" "}
						{job.numberOfStudentsCanApply}
					</p>
					<button type="Submit">Apply</button>
				</div>
			))}
		</div>
	);
}

export default SearchJobs;
