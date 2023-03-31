import style from "./GradAppliedJobs.molude.css";

function GradAppliedJobs({ job }) {
	const jobApplied = [{ job }];
	console.log(jobApplied);

	return (
		<div className={style.container}>
			<h2 className={style.containerTitle}>Jobs you have applied for</h2>
			{jobApplied.map((job) => (
				<div key={job.id} id="job-card-applied">
					<h2 className={style.jobTile}>title: {job.title}</h2>
					<p className={style.containerPar}>description: {job.description}</p>
					<p className={style.containerPar}>category: {job.category}</p>
					<div id="container1">
						<p id="type1">{job.type}</p>
						<p id="salary1">{job.salaryRange}</p>
					</div>
					<p className={style.containerPar}>company: {job.companyName}</p>
				</div>
			))}
		</div>
	);
}

export default GradAppliedJobs;
