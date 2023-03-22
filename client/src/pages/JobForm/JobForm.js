import { useState } from "react";
import {  Form, Button } from "react-bootstrap";
import "./JobForm.css";

function JobForm() {
	const [formData, setFormData] = useState({
		title: "",
		type: "",
		description: "",
		responsibilities: "",
		numberOfGitCommits: "",
		codewarKataLevel: "",
		codewarPoints: "",
		codalityTestPoints: "",
		category: "",
		salaryRange: "",
		contactName: "",
		contactEmail: "",
		contactPhone: "",
		companyName: "",
		companyWebSite: "",
		companyLogo: "",
		requirements: "",
		applicationsDeadline: "",
		numberOfStudentsCanApply: "",
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
	const postJob = (data) => {
		fetch("http://localhost:3100/api/job", {
			method: "POST",
			header: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((data) => console.log(data))
			.catch((err) => console.error(err));
	};

	return (
		<div className="container">
			<h1 className="heading">POST A JOB</h1>
					<Form className="main p-2" noValidate onSubmit={handleSubmit}>
				<div className="section mx-4 my-2">
							<Form.Group className="group mb-3 d-flex" controlId="title">
						<Form.Label className="formLabel">Job Title:</Form.Label>
								<Form.Control
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
							<Form.Group className="group mb-3 d-flex" controlId="responsibilities">
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
								<Form.Label className="formLabel">NUMBER OF GIT COMMITS:</Form.Label>
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
						<Form.Label className="formLabel">APPLICATIONS DEADLINE:</Form.Label>
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
								<Form.Label className="formLabel">NUMBER OF STUDENTS CAN APPLY:</Form.Label>
								<Form.Control
									name="numberOfStudentsCanApply"
									type="number"
									placeholder="Enter numberOfStudentsCanApply"
									value={formData.numberOfStudentsCanApply}
									onChange={handleForm}
								/>
							</Form.Group>
						<div className="d-flex justify-content-end p-2">
							<Button variant="danger" type="submit">
								PUBLISH
							</Button>
						</div>
				</div>
					</Form>
		</div>
	);
}

export default JobForm;
