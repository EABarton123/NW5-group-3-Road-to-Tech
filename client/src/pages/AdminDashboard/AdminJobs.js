import JobForm from "../JobForm/JobForm";
import SearchJobs from "../JobsList/SearchJobs";
import { useState } from "react";

function AdminJobs() {
	const [isUpdateData, setIsUpdateData] = useState(false);

	return (
		<div>
			<SearchJobs isUpdateData={isUpdateData} />
			<JobForm setIsUpdateData={setIsUpdateData} />
		</div>
	);
}

export default AdminJobs;
