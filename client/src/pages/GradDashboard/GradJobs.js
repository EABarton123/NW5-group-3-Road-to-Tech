import GradAppliedJobs from "../GradAppliedJobs";
import SearchJobs from "../JobsList/SearchJobs";
import "./GradJobs.css";

function GradJobs() {
	return (
		<div>
			<SearchJobs />
			<GradAppliedJobs />
		</div>
	);
}

export default GradJobs;
