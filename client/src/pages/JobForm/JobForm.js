import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./JobForm.css";
import salaryRangeJson from "./salaryRange.json";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function JobForm() {
	const [title, setTitle] = useState("");
	const [type, setType] = useState("");
	const [description, setDescription] = useState("");
	const [responsibilities, setResponsibilities] = useState("");
	const [numberOfGitCommits, setNumberOfGitCommits] = useState(0);
	const [codewarKataLevel, setCodewarKataLevel] = useState(0);
	const [codewarPoints, setCodewarPoints] = useState(0);
	const [codalityTestPoints, setCodalityTestPoints] = useState(0);
	const [category, setCategory] = useState("");
	const [salaryRange, setSalaryRange] = useState({ min: 0, max: 0 });
	const [contactName, setContactName] = useState("");
	const [contactEmail, setContactEmail] = useState("");
	const [contactPhone, setContactPhone] = useState(0);
	const [companyName, setCompanyName] = useState("");
	const [companyWebSite, setCompanyWebSite] = useState("");
	const [companyLogo, setCompanyLogo] = useState("");
	const [requirements, setRequirements] = useState("");
	const [applicationsDeadline, setApplicationsDeadline] = useState("");
	const [numberOfStudentsCanApply, setNumberOfStudentsCanApply] = useState(0);

	// const [salaryMin, setSalaryMin] = useState(0);
	// const ....blablabla
	// 	const [formData, setFormData] = useState({
	// title: "",
	// type: "",
	// description: "",
	// responsibilities: "",
	// numberOfGitCommits: 0,
	// codewarKataLevel: 0,
	// codewarPoints: 0,
	// codalitiyTestPoints: 0,
	// category: "",
	// salaryRange: { min: 0, max: 0 },
	// contactName: "",
	// contactEmail: "",
	// contactPhone: 0,
	// companyName: "",
	// companyWebSite: "",
	// companyLogo: "",
	// requirements: "",
	// applicationsDeadline: "",
	// numberOfStudentsCanApply: 0,
	// 	});

	const postJob = async () => {
		try {
			await axios.post("/api/job", {
				title,
				type,
				description,
				responsibilities,
				numberOfGitCommits,
				codewarKataLevel,
				codewarPoints,
				codalityTestPoints,
				category,
				salaryRange,
				contactName,
				contactEmail,
				contactPhone,
				companyName,
				companyWebSite,
				companyLogo,
				requirements,
				applicationsDeadline,
				numberOfStudentsCanApply,
			});
		} catch (err) {
			console.log({ err });
		}
	};

	// const handleForm = (e) => {
	// 	const { name, value } = e.target;
	// 	setFormData({ ...formData, [name]: value });
	// };
	const handleCategory = (e) => {
		if (e.target.value == "none") {
			setCategory(category);
		} else {
			setCategory(e.target.value);
		}
	};
	const handleSalary = (e) => {
		const value = parseInt(e.target.value);
		if (value == -1) {
			setSalaryRange({ salaryRange: { min: 0, max: 0 } });
		} else {
			const { min, max } = salaryRangeJson.filter((item) => item.id == value)[0];
			setSalaryRange({ salaryRange: { min, max } });
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		postJob().then(() => toast.success("Job posted!"));
	};

	return (
		<div className="container">
			<ToastContainer position="bottom-center" limit={1} />
			<h1 className="heading">POST A JOB</h1>
			<div className="jobform p-2">
				<div className="section mx-4 my-2">
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">Job Title:</Form.Label>
						<Form.Control
							name="title"
							type="text"
							placeholder="Enter title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">Job Type:</Form.Label>
						<Form.Control
							name="type"
							type="text"
							placeholder="Enter type"
							value={type}
							onChange={(e) => setType(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="description">
						<Form.Label className="formLabel">Job Description:</Form.Label>
						<Form.Control
							name="description"
							as="textarea"
							placeholder="Enter description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</Form.Group>
					<Form.Group
						className="group mb-3 d-flex"
						controlId="responsibilities"
					>
						<Form.Label className="formLabel">Responsibilities:</Form.Label>
						<Form.Control
							name="responsibilities"
							as="textarea"
							placeholder="Enter responsibilities"
							value={responsibilities}
							onChange={(e) => setResponsibilities(e.target.value)}
						/>
					</Form.Group>
					<h3 className="mb-4">CONSTRAINTS:</h3>
					<Form.Group className="group mb-3 d-flex">
						<Form.Label className="formLabel">
							NUMBER OF GIT COMMITS:
						</Form.Label>
						<Form.Control
							name="numberOfGitCommits"
							type="number"
							min="0"
							placeholder="Enter responsibilities"
							value={numberOfGitCommits}
							onChange={(e) => setNumberOfGitCommits(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex">
						<Form.Label className="formLabel">CODEWAR KATA LEVEL:</Form.Label>
						<Form.Control
							name="codewarKataLevel"
							type="number"
							min="0"
							placeholder="Enter codewarKataLevel"
							value={codewarKataLevel}
							onChange={(e) => setCodewarKataLevel(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex">
						<Form.Label className="formLabel">CODEWAR POINTS:</Form.Label>
						<Form.Control
							name="codewarPoints"
							type="number"
							min="0"
							placeholder="Enter codewarPoints"
							value={codewarPoints}
							onChange={(e) => setCodewarPoints(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="mgroup mb-3 d-flex">
						<Form.Label className="formLabel">CODILITY TEST POINTS:</Form.Label>
						<Form.Control
							name="codalityTestPoints"
							type="number"
							min="0"
							placeholder="Enter codalitiyTestPoints"
							value={codalityTestPoints}
							onChange={(e) => setCodalityTestPoints(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">REQUIREMENTS:</Form.Label>
						<Form.Control
							name="requirements"
							type="text"
							placeholder="Enter requirements"
							value={requirements}
							onChange={(e) => setRequirements(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">
							APPLICATIONS DEADLINE:
						</Form.Label>
						<Form.Control
							name="applicationsDeadline"
							type="date"
							placeholder="Enter applicationsDeadline"
							value={applicationsDeadline}
							onChange={(e) => setApplicationsDeadline(e.target.value)}
						/>
					</Form.Group>
				</div>
				<div className="section mx-4 my-2">
					<Form.Group className="group mb-3 d-flex">
						<Form.Label className="formLabel">JOB CATEGORY:</Form.Label>
						<Form.Select onChange={handleCategory}>
							<option value="none">Disabled select</option>
							<option value="Software Developer">Software Developer</option>
							<option value="Tester">Tester</option>
							<option value="Designer">Designer</option>
						</Form.Select>
					</Form.Group>

					<Form.Group className="group mb-3 d-flex">
						<Form.Label className="formLabel">SALARY RANGE:</Form.Label>
						<Form.Select onChange={handleSalary}>
							<option value="-1">Disabled select</option>
							{salaryRangeJson.map((salary) => (
								<option value={salary.id} key={salary.id}>
									Min: {salary.min} - Max: {salary.max}
								</option>
							))}
						</Form.Select>
					</Form.Group>
					<h3 className="mb-4">CONTACT INFORMATION:</h3>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel ">NAME:</Form.Label>
						<Form.Control
							name="contactName"
							type="text"
							placeholder="Enter contactName"
							value={contactName}
							onChange={(e) => setContactName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">EMAIL:</Form.Label>
						<Form.Control
							name="contactEmail"
							type="email"
							placeholder="name@example.com"
							value={contactEmail}
							onChange={(e) => setContactEmail(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">PHONE:</Form.Label>
						<Form.Control
							name="contactPhone"
							type="number"
							placeholder="Enter contactPhone"
							value={contactPhone}
							onChange={(e) => setContactPhone(e.target.value)}
						/>
					</Form.Group>
					<h3 className="mb-4">COMPANY INFORMATION:</h3>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">NAME:</Form.Label>
						<Form.Control
							name="companyName"
							type="text"
							placeholder="Enter companyName"
							value={companyName}
							onChange={(e) => setCompanyName(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">WEBSITE:</Form.Label>
						<Form.Control
							name="companyWebSite"
							type="text"
							placeholder="Enter companyWebSite"
							value={companyWebSite}
							onChange={(e) => setCompanyWebSite(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">LOGO:</Form.Label>
						<Form.Control
							name="companyLogo"
							type="number"
							placeholder="Enter companyLogo"
							value={companyLogo}
							onChange={(e) => setCompanyLogo(e.target.value)}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">
							NUMBER OF STUDENTS CAN APPLY:
						</Form.Label>
						<Form.Control
							name="numberOfStudentsCanApply"
							type="number"
							min="0"
							placeholder="Enter numberOfStudentsCanApply"
							value={numberOfStudentsCanApply}
							onChange={(e) => setNumberOfStudentsCanApply(e.target.value)}
						/>
					</Form.Group>
					<div className="d-flex justify-content-end p-2">
						<Button variant="danger" type="submit" onClick={handleSubmit}>
							PUBLISH
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobForm;
