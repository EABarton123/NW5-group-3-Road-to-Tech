import { useState, useEffect } from "react";
import "./SearchJobs.css";
import SingleJobListing from "./SingleJobListing";
import axios from "axios";

function SearchJobs() {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [selectedJob, setSelectedJob] = useState({});

	useEffect(() => {
		axios
			.get("/api/job")
			.then((response) => {
				setData(response.data);
				setFilteredData(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const handleChange = (event) => {
		const search = event.target.value;
		const filteredJobs = data.filter((job) =>
			job.title.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredData(filteredJobs);
	};

	function handleJobExpand(job) {
		console.log(job);
		setSelectedJob(job);
	}

	return (
		<div id="div-main">
			<div id="div-left">
				<input
					id="searchbar"
					type="text"
					placeholder="Search Jobs"
					onChange={handleChange}
				/>
				{filteredData.map((job) => (
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
