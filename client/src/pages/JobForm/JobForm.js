
import { useEffect, useState } from "react";
import "./JobForm.css";


function JobForm() {
	const [formData, setFormData] = useState({});

	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				console.log({ body });
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return <div>Job form page</div>;
}

export default JobForm;
