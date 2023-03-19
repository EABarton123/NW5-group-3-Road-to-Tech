import "./GradJobs.css";

function GradAppliedJobs() {
    const jobApplied = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ];

    return (
			<div>
				<h2>Jobs you have applied for</h2>
				{jobApplied.map((job) => (
					<div key={job.id} id="job-card-applied">
						<h2>title: {job.title}</h2>
						<p>description: {job.description}</p>
						<p>category: {job.category}</p>
						<div id="container1">
							<p id="type1">{job.type}</p>
							<p id="salary1">{job.salaryRange}</p>
						</div>
						<p>company: {job.companyName}</p>
					</div>
				))}
			</div>
		);
}

export default GradAppliedJobs;