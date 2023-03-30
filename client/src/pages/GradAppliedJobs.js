import "./GradDashboard/GradJobs.css";

function GradAppliedJobs({ job }) {
	const jobApplied = [{ job }];
	console.log(jobApplied);
	const { id, title, type, description } = jobApplied;

	return (
		<div>
			<h2>Jobs you have applied for</h2>

			{jobApplied.map((job) => (
				<div key={id} id="job-card-applied">
					<h2>title: {title}</h2>
					<p>description: {description}</p>
					<p>category: {job.category}</p>
					<div id="container1">
						<p id="type1">{type}</p>
						<p id="salary1">{job.salaryRange}</p>
					</div>
					<p>company: {job.companyName}</p>
				</div>
			))}
		</div>
	);
}

export default GradAppliedJobs;
