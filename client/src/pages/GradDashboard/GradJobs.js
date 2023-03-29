<<<<<<<< HEAD:client/src/pages/GradJobs/GradJobs.js
import GradAppliedJobs from "../GradAppliedJobs/GradAppliedJobs";
import SearchJobs from "../SearchJobs/SearchJobs";

========
import GradAppliedJobs from "../GradAppliedJobs";
import SearchJobs from "../JobsList/SearchJobs";
import "./GradJobs.css";
>>>>>>>> main:client/src/pages/GradDashboard/GradJobs.js

function GradJobs() {
	return (
		<div>
			<SearchJobs />
			<GradAppliedJobs />
		</div>
	);
}

export default GradJobs;
