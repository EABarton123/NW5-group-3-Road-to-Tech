import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
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
		e.preventDefault();
	};

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

	return (
		<Container className="mt-5">
			<Row className="justify-content-center">
				<Col md={5}>
					<Form noValidate onSubmit={handleSubmit}>
						<div>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>Title</Form.Label>
								<Form.Control
									name="title"
									type="text"
									placeholder="Enter title"
									value={formData.title}
									onChange={handleForm}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="type">
								<Form.Label>Type</Form.Label>
								<Form.Control
									name="type"
									type="text"
									placeholder="Enter type"
									value={formData.type}
									onChange={handleForm}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="description">
								<Form.Label>Description</Form.Label>
								<Form.Control
									name="description"
									type="text"
									placeholder="Enter description"
									value={formData.description}
									onChange={handleForm}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="responsibilities">
								<Form.Label>responsibilities</Form.Label>
								<Form.Control
									name="responsibilities"
									type="text"
									placeholder="Enter responsibilities"
									value={formData.responsibilities}
									onChange={handleForm}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Category</Form.Label>
								<Form.Select disabled>
									<option>Disabled select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>SalaryRange</Form.Label>
								<Form.Select disabled>
									<option>Disabled select</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</Form.Select>
							</Form.Group>
						</div>

						<div>
							<Form.Group className="mb-3">
								<Form.Label>numberOfGitCommits</Form.Label>
								<Form.Control
									name="numberOfGitCommits"
									type="number"
									placeholder="Enter responsibilities"
									value={formData.numberOfGitCommits}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>codewarKataLevel</Form.Label>
								<Form.Control
									name="codewarKataLevel"
									type="number"
									placeholder="Enter codewarKataLevel"
									value={formData.codewarKataLevel}
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>codewarPoints</Form.Label>
								<Form.Control
									name="codewarPoints"
									type="number"
									placeholder="Enter codewarPoints"
									value={formData.codewarPoints}
								/>
							</Form.Group>
							<Form.Group className="mb-3">
								<Form.Label>codalitiyTestPoints</Form.Label>
								<Form.Control
									name="codalitiyTestPoints"
									type="number"
									placeholder="Enter codalitiyTestPoints"
									value={formData.codalityTestPoints}
								/>
							</Form.Group>
						</div>
						<div>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>contactName</Form.Label>
								<Form.Control
									name="contactName"
									type="text"
									placeholder="Enter contactName"
									value={formData.contactName}
									onChange={handleForm}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>contactEmail</Form.Label>
								<Form.Control
									name="contactEmail"
									type="email"
									placeholder="Enter contactEmail"
									value={formData.contactEmail}
									onChange={handleForm}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>contactPhone</Form.Label>
								<Form.Control
									name="contactPhone"
									type="number"
									placeholder="Enter contactPhone"
									value={formData.contactPhone}
									onChange={handleForm}
								/>
							</Form.Group>
						</div>
						<div>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>companyName</Form.Label>
								<Form.Control
									name="companyName"
									type="text"
									placeholder="Enter companyName"
									value={formData.companyName}
									onChange={handleForm}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>companyWebSite</Form.Label>
								<Form.Control
									name="companyWebSite"
									type="text"
									placeholder="Enter companyWebSite"
									value={formData.companyWebSite}
									onChange={handleForm}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>companyLogo</Form.Label>
								<Form.Control
									name="companyLogo"
									type="number"
									placeholder="Enter companyLogo"
									value={formData.companyLogo}
									onChange={handleForm}
								/>
							</Form.Group>
						</div>
						<div>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>requirements</Form.Label>
								<Form.Control
									name="requirements"
									type="text"
									placeholder="Enter requirements"
									value={formData.requirements}
									onChange={handleForm}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>applicationsDeadline</Form.Label>
								<Form.Control
									name="applicationsDeadline"
									type="text"
									placeholder="Enter applicationsDeadline"
									value={formData.applicationsDeadline}
									onChange={handleForm}
								/>
							</Form.Group>
							<Form.Group className="mb-3" controlId="title">
								<Form.Label>numberOfStudentsCanApply</Form.Label>
								<Form.Control
									name="numberOfStudentsCanApply"
									type="number"
									placeholder="Enter numberOfStudentsCanApply"
									value={formData.numberOfStudentsCanApply}
									onChange={handleForm}
								/>
							</Form.Group>
						</div>

						<Button variant="primary" type="submit">
							PREVIEWS
						</Button>
						<Button variant="primary" type="submit">
							PUBLISH
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default JobForm;