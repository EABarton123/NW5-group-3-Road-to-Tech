import JobForm from "../JobForm/JobForm";
import SearchJobs from "../JobsList/SearchJobs";

function AdminJobs() {
	return (
		<div>
			<SearchJobs jobs={[]} />
			<JobForm />
		</div>
	);
}

export default AdminJobs;
