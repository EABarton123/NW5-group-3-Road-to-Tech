import { request, response, Router } from "express";
import db from "./db";
import logger from "./utils/logger";
// const app = express();
// app.use(express.urlencoded({ extended: false }));

const router = Router();

// router.get("/", (_, res) => {
// 	logger.debug("Welcoming everyone...");
// 	res.json({ message: "Hello, world!" });
// });

router.get("/signup/grads", (req, res) => {
	db.query("select * from  signedupgrads")
		.then((grads) => res.status(200).json(grads.rows))
		.catch((err) => {
			// console.error(err);
			res.status(500).send(err);
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
					(err, results) => {
						if (err) {
							// throw error;
							// console.error(err);
							return response.status(400).json({ dupCertificateNumFound });
						}
						response.status(200).send("Grads registered");
						// console.log(results.rows);
					}
				);
			}
		}
	);
});
export default router;
