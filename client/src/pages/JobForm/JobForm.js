import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./JobForm.css";
import axios from "axios";

function JobForm() {
	const [formData, setFormData] = useState({
		"title": "titlea",
		"type": "typea",
		"description": "descriptiona",
		"responsibilities": "responsibilitiesa",
		"numberOfGitCommits": 0,
		"codewarKataLevel": 0,
		"codewarPoints": 0,
		"codalitiyTestPoints": 0,
		"category": "categorya",
		"salaryRange": { "min": 10000, "max": 20000 },
		"contactName": "namea",
		"contactEmail": "emaila",
		"contactPhone": 123456789,
		"companyName": "companyNamea",
		"companyWebSite": "companyWebSitea",
		"companyLogo": "urll",
		"requirements": "requirementss",
		"applicationsDeadline": "applicationsDeadlinea",
		"numberOfStudentsCanApply": 0,
	});

	const handleForm = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		console.log({ formData });
		e.preventDefault();
		postJob(formData);
	};

	const postJob = async (formData) => {
		try {
			const { resData } = await axios.post("/api/job", {

				...formData,
			});
			console.log({ resData });
		} catch (err) {
			console.log({ err });
		}
	};
	return (
		<div className="container">
			<h1 className="heading">POST A JOB</h1>
			<div className="jobform p-2"  >
				<div className="section mx-4 my-2">
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">Job Title:</Form.Label>
						<Form.Control
							// className="rounded-sm"
							name="title"
							type="text"
							placeholder="Enter title"
							value={formData.title}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="type">
						<Form.Label className="formLabel">Job Type:</Form.Label>
						<Form.Control
							name="type"
							type="text"
							placeholder="Enter type"
							value={formData.type}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="description">
						<Form.Label className="formLabel">Job Description:</Form.Label>
						<Form.Control
							name="description"
							as="textarea"
							placeholder="Enter description"
							value={formData.description}
							onChange={handleForm}
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
							value={formData.responsibilities}
							onChange={handleForm}
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
							placeholder="Enter responsibilities"
							value={formData.numberOfGitCommits}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex">
						<Form.Label className="formLabel">CODEWAR KATA LEVEL:</Form.Label>
						<Form.Control
							name="codewarKataLevel"
							type="number"
							placeholder="Enter codewarKataLevel"
							value={formData.codewarKataLevel}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex">
						<Form.Label className="formLabel">CODEWAR POINTS:</Form.Label>
						<Form.Control
							name="codewarPoints"
							type="number"
							placeholder="Enter codewarPoints"
							value={formData.codewarPoints}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="mgroup mb-3 d-flex">
						<Form.Label className="formLabel">CODILITY TEST POINTS:</Form.Label>
						<Form.Control
							name="codalityTestPoints"
							type="number"
							placeholder="Enter codalitiyTestPoints"
							value={formData.codalityTestPoints}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">REQUIREMENTS:</Form.Label>
						<Form.Control
							name="requirements"
							type="text"
							placeholder="Enter requirements"
							value={formData.requirements}
							onChange={handleForm}
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
							value={formData.applicationsDeadline}
							onChange={handleForm}
						/>
					</Form.Group>
				</div>
				<div className="section mx-4 my-2">
					<Form.Group className="group mb-3 d-flex">
						<Form.Label className="formLabel">JOB CATEGORY:</Form.Label>
						<Form.Select>
							<option>Disabled select</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Form.Group>

					<Form.Group className="group mb-3 d-flex">
						<Form.Label className="formLabel">SALARY RANGE:</Form.Label>
						<Form.Select>
							<option>Disabled select</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</Form.Select>
					</Form.Group>
					<h3 className="mb-4">CONTACT INFORMATION:</h3>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel ">NAME:</Form.Label>
						<Form.Control
							name="contactName"
							type="text"
							placeholder="Enter contactName"
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
							value={formData.contactEmail}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">PHONE:</Form.Label>
						<Form.Control
							name="contactPhone"
							type="number"
							placeholder="Enter contactPhone"
							value={formData.contactPhone}
							onChange={handleForm}
						/>
					</Form.Group>
					<h3 className="mb-4">COMPANY INFORMATION:</h3>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">NAME:</Form.Label>
						<Form.Control
							name="companyName"
							type="text"
							placeholder="Enter companyName"
							value={formData.companyName}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">WEBSITE:</Form.Label>
						<Form.Control
							name="companyWebSite"
							type="text"
							placeholder="Enter companyWebSite"
							value={formData.companyWebSite}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">LOGO:</Form.Label>
						<Form.Control
							name="companyLogo"
							type="number"
							placeholder="Enter companyLogo"
							value={formData.companyLogo}
							onChange={handleForm}
						/>
					</Form.Group>
					<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">
							NUMBER OF STUDENTS CAN APPLY:
						</Form.Label>
						<Form.Control
							name="numberOfStudentsCanApply"
							type="number"
							placeholder="Enter numberOfStudentsCanApply"
							value={formData.numberOfStudentsCanApply}
							onChange={handleForm}
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
