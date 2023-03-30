import style from "./GradAppliedJobs.molude.css";

function GradAppliedJobs({ job }) {
	const jobApplied = [{ job }];
	console.log(jobApplied);
	const { id, title, type, description } = jobApplied;

	return (
		<div>
			<h2>Jobs you have applied for</h2>
			{jobApplied.map((job) => (
				<div key={job.id} id="job-card-applied">
					<h2>title: {job.title}</h2>
					<p>description: {job.description}</p>
					<p>category: {job.category}</p>
					<div id="container1">
						<p id="type1">{type}</p>
						<p id="salary1">{job.salaryRange}</p>
					</div>
					<p className={style.containerPar}>company: {job.companyName}</p>
				</div>
			))}
		</div>
	);
}

export default GradAppliedJobs;
