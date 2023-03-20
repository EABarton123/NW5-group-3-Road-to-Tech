import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.post("/job", async (req, res) => {
	const reqBody = req.body;

	const sqlQuery =
		"INSERT INTO job(title,type,description,responsibilities,number_of_gitcommits,codewar_kata_level,codewar_points,codalitiy_test_points,category,salary_range_min,salary_range_max,contact_name,contact_email,contact_phone,company_name,company_web_site,company_logo,requirements,applications_deadline,number_of_students_can_apply) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15,  $16, $17, $18, $19, $20) RETURNING *";

	const values = [
		reqBody.title,
		reqBody.type,
		reqBody.description,
		reqBody.responsibilities,
		reqBody.numberOfGitCommits,
		reqBody.codewarKataLevel,
		reqBody.codewarPoints,
		reqBody.codalitiyTestPoints,
		reqBody.category,
		reqBody.salaryRange.min,
		reqBody.salaryRange.max,
		reqBody.contactName,
		reqBody.contactEmail,
		reqBody.contactPhone,
		reqBody.companyName,
		reqBody.companyWebSite,
		reqBody.companyLogo,
		reqBody.requirements,
		reqBody.applicationsDeadline,
		reqBody.numberOfStudentsCanApply,
	];

	try {
		const dbData = await db.query(sqlQuery, values);
		res.status(200).json(dbData.rows);
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.get("/signup/grads", (request, response) => {
	db.query("select * from  signedupgrads")
		.then((grads) => response.status(200).json(grads.rows))
		.catch((err) => {
			// console.error(err);
			response.status(500).send(err);
		});
});

router.post("/signup/grads", (request, response) => {
	const failureObject = {
		result: "failure",
		message: "Please enter all fields",
	};
	const failurePassword = {
		result: "failure Password",
		message: "Password should be at least 6 character",
	};
	const dupEmailFound = {
		result: "Duplicate Email found",
		message: "Grads/Email is already registered",
	};

	const dupCertificateNumFound = {
		result: "Duplicate Certificate Number found",
		message: "Grads is already registered",
	};

	const newEmail = request.body.email;
	const newCertificateNum = request.body.certificateNum;
	const newUserName = request.body.username;
	const newPassword = request.body.password;

	// console.log({newEmail, newCertificateNum, newUserName, newPassword});
	if (!newEmail || !newCertificateNum || !newUserName || !newPassword) {
		response.status(400).json({ failureObject });
	}

	if (newPassword.length < 6) {
		response.status(400).json({ failurePassword });
	}

	db.query(
		"SELECT * FROM signedupgrads WHERE email=$1",
		[newEmail],
		(err, result) => {
			if (result.rowCount > 0) {
				return response.status(400).json({ dupEmailFound });
			} else {
				const query =
					"INSERT INTO signedupgrads (email, certificateNum, username, password) VALUES ($1, $2, $3, $4)";
				db.query(
					query,
					[newEmail, newCertificateNum, newUserName, newPassword],
					(err) => {
						if (err) {
							// throw error;
							// console.error(err);
							return response.status(400).json({ dupCertificateNumFound });
						}
						response.status(200).send("Grads registered");
						//  console.log(results.rows);
					}
				);
			}
		}
	);
});
export default router;
