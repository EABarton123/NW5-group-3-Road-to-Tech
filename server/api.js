import { Router } from "express";
import db from "./db";
import logger from "./utils/logger";

const router = Router();

router.get("/", (_, res) => {
	logger.debug("Welcoming everyone...");
	res.json({ message: "Hello, world!" });
});


router.get("/users", (req, res) => {
	db.query("select * from  accounts")
		.then((accounts) => res.status(200).json(accounts.rows))
		.catch((err) => {
			console.error(err);
			res.status(500).send(err);
		});
});
export default router;
