import { Router } from "express";
import db from "./db";
// import logger from "./utils/logger";
// const app = express();
// app.use(express.urlencoded({ extended: false }));

const router = Router();

// router.get("/", (_, res) => {
// 	logger.debug("Welcoming everyone...");
// 	res.json({ message: "Hello, world!" });
// });

router.get("/signup", (request, response) => {
	db.query("select * from  user_data")
		.then((grads) => response.status(200).json(grads.rows))
		.catch((err) => {
			// console.error(err);
			response.status(500).send(err);
		});
});

router.post("/signup", (request, response) => {
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

	const dupFound = {
		result: "Error in registering",
		message: "Grads is already registered",
	};

	const newEmail = request.body.email;
	// const newCertificateNum = request.body.certificateNum;
	const newUserName = request.body.username;
	const newPassword = request.body.password;

	// console.log({newEmail, newCertificateNum, newUserName, newPassword});
	if (!newEmail || !newUserName || !newPassword) {
		response.status(400).json({ failureObject });
	}

	if (newPassword.length < 8) {
		response.status(400).json({ failurePassword });
	}

	db.query(
		"SELECT * FROM user_data WHERE email=$1",
		[newEmail],
		(err, result) => {
			if (result.rowCount > 0) {
				return response.status(400).json({ dupEmailFound });
			} else {
				const query =
					"INSERT INTO user_data (email, username, password) VALUES ($1, $2, $3)";
				db.query(
					query,
					[newEmail, newUserName, newPassword],
					(err) => {
						if (err) {
							// throw error;
							// console.error(err);
							return response.status(400).json({ dupFound });
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
