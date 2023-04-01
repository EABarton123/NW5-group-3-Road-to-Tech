import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./JobForm.css";
import salaryRangeJson from "./salaryRange.json";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { object, string, number, date } from "yup";

function JobForm() {
	const [formData, setFormData] = useState({
		title: "",
		type: "",
		description: "",
		responsibilities: "",
		numberOfGitCommits: 0,
		codewarKataLevel: 0,
		codewarPoints: 0,
		codalityTestPoints: 0,
		category: "",
		salaryRange: { min: 0, max: 0 },
		contactName: "",
		contactEmail: "",
		contactPhone: 0,
		companyName: "",
		companyWebSite: "",
		companyLogo: "",
		requirements: "",
		applicationsDeadline: "", //todo:calender yaptik nasil olacak bu/ date mi olacak
		numberOfStudentsCanApply: 0,
	});

	const [file, setFile] = useState();
	const [isUploadingImage, setIsUploadingImage] = useState(false);
	const [logoName, setLogoName] = useState();

	const navigate = useNavigate();

	const jobSchema = object({
		title: string().required("Title field is required"),
		type: string(),
		description: string(),
		responsibilities: string(),
		numberOfGitCommits: number().positive().integer(),
		codewarKataLevel: number().positive().integer(),
		codewarPoints: number().positive().integer(),
		codalityTestPoints: number().positive().integer(),
		category: string(),
		salaryRange: object({ min: number().positive(), max: number().positive() }),
		contactName: string(),
		contactEmail: string().email("Must be a valid email"),
		contactPhone: number(),
		companyName: string(),
		companyWebSite: string().url().nullable(),
		companyLogo: "", // todo: upload image bak
		requirements: string(),
		applicationsDeadline: date(),
		numberOfStudentsCanApply: number().positive().integer(),
	});

	const handleForm = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// const handleForm = (e) => {
	// 	const { name, value } = e.target;
	// 	setFormData({ ...formData, [name]: value });
	const handleCategory = (e) => {
		if (e.target.value == "none") {
			setFormData({ ...formData, category: "" });
		} else {
			setFormData({ ...formData, category: e.target.value });
		}
	};
	const handleSalary = (e) => {
		const value = parseInt(e.target.value);
		if (value == -1) {
			setFormData({ ...formData, salaryRange: { min: 0, max: 0 } });
		} else {
			const { min, max } = salaryRange.filter((item) => item.id == value)[0];
			setFormData({ ...formData, salaryRange: { min, max } });
			console.log(min, max);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ formData });
		e.preventDefault();
		// jobSchema.validate(formData);
		const fd = new FormData();
		fd.append("image", file, file.name);
		setIsUploadingImage(true);
		axios
			.post("api/upload", fd, {})
			.then(({ data }) => {
				postJob({ ...formData, companyLogo: data.imageUrl });
			})
			.catch((err) => console.log(err))
			.finally(() => setIsUploadingImage(false));
	};

	const handleFileUpload = (e) => {
		setFile(e.target.files[0]);
		setLogoName(e.target.files[0].name);
	};

	const postJob = async (formData) => {
		try {
			jobSchema.validate(formData);
			const { resData } = await axios.post("/api/job", {
				...formData,
			});
			console.log({ resData });
			navigate("/admin");
		} catch (err) {
			console.log({ err });
		}
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
							placeholder="Enter numberOfGitCommits"
							value={formData.numberOfGitCommits}
							onChange={handleForm}
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
							placeholder="Enter Contact Name"
							value={formData.contactName}
							onChange={handleForm}
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
							placeholder="Enter Company Name"
							value={formData.companyName}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">WEBSITE:</Form.Label>
						<Form.Control
							name="companyWebSite"
							type="text"
							placeholder="Enter Company WebSite"
							value={formData.companyWebSite}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">LOGO:</Form.Label>
						<Form.Control
							name="companyLogo"
							type="file"
							placeholder={logoName || "Enter companyLogo"}
							onChange={handleFileUpload}
						/>
						{isUploadingImage && <Spinner animation="grow" />}
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
						<Button
							variant="danger"
							type="submit"
							onClick={handleSubmit}
							disabled={isUploadingImage}
						>
							PUBLISH
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default JobForm;
