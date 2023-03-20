import GradAppliedJobs from "./GradAppliedJobs";
import SearchJobs from "./SearchJobs";
import "./GradJobs.css";

function GradJobs() {
	return (
		<div>
			<div>
				<SearchJobs />
				<GradAppliedJobs />
			</div>
		</div>
	);
}

export default GradJobs;
