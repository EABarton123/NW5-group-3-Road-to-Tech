import JobForm from "../JobForm/JobForm";
import SearchJobs from "../JobsList/SearchJobs";

function AdminJobs() {
	return (
		<div>
			<SearchJobs />
			<JobForm />
		</div>
	);
}

export default AdminJobs;
