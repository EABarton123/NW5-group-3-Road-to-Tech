import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


router.post("/job", (req, res) => {
	// const reqBody=req.body
const reqBody = {
	title: "title",
	type: "type",
	description: "description",
	responsibilities: "responsibilities",
	numberOfGitCommits: 1234,
	codewarKataLevel: 5,
	codewarPoints: 456,
	codalitiyTestPoints: 789,
	category: "category",
	salaryRange: { min: 13000, max: 30000 },
	contactName: "name",
	contactEmail: "email",
	contactPhone: 9876543,
	companyName: "companyName",
	companyWebSite: "companyWebSite",
	companyLogo: "url",
	requirements: "requirements",
	applicationsDeadline: "applicationsDeadline",
	numberOfStudentsCanApply:951,
};


	console.log("Test",{ data:req.body });  // TODO: Database  insert

	const sqlQuery = "INSERT INTO job(title,type) VALUES($1, $2) RETURNING *";
 const values = [reqBody.title, reqBody.type];


 // callback
  db.query(sqlQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);

				res.status(500);

  } else {
    console.log(res.rows[0]);
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }

				res.json({ message: "Succesfully  Job form is created" });
  }
});





});






export default router;
