import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";

const router = Router();

router.get("/",  (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});

router.post("/job", async (req, res) => {
	const reqBody=req.body;

	const sqlQuery = "INSERT INTO job(title,type,description,responsibilities,number_of_gitcommits,codewar_kata_level,codewar_points,codalitiy_test_points,category,salary_range_min,salary_range_max,contact_name,contact_email,contact_phone,company_name,company_web_site,company_logo,requirements,applications_deadline,number_of_students_can_apply) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15,  $16, $17, $18, $19, $20) RETURNING *";

  const values = [reqBody.title, reqBody.type,reqBody.description,reqBody.responsibilities,reqBody.numberOfGitCommits,reqBody.codewarKataLevel,reqBody.codewarPoints,reqBody.codalitiyTestPoints,reqBody.category,reqBody.salaryRange.min,reqBody.salaryRange.max,reqBody.contactName,reqBody.contactEmail,reqBody.contactPhone,reqBody.companyName,reqBody.companyWebSite,reqBody.companyLogo,reqBody.requirements,reqBody.applicationsDeadline,reqBody.numberOfStudentsCanApply];

  try {
    const dbData = await db.query(sqlQuery, values);
    res.status(200).json(dbData.rows);
  } catch (error) {
    res.status(500).json({ error });
  }

});

export default router;
