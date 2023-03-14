import { Router } from "express";
import logger from "./utils/logger";
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = Router();
const MAILGUN_DOMAIN = "sandbox02afd029aa3943e8b405f995365c67b8.mailgun.org";
const MAILGUN_API_KEY = "4847b7149dd9d399482ac14d3a78f82e-b36d2969-1f8ba3ad";

const mg = require("mailgun-js");

const mailgun = () =>
	mg({
		apiKey: MAILGUN_API_KEY,
		domain: MAILGUN_DOMAIN,
	});



router.post("/", (request, response) => {

	const textToEveryOne = `Your email has been verified Click Here`;
	const { email, certificateNum } = request.body;
	const messageData = {
		from: "adiba.fin@gmail.com",
		to: `${email}`,
		certificateNum: `${certificateNum}`,
		text: `<p> ${textToEveryOne} </p>`,
	};
	mailgun().messages().send(messageData, (error, body) => {
		if (error) {
			console.log(error);
			response.status(500).send({ message: "Error in sending email" });
		} else {
			console.log(body);
			response.send({ message: "Email sent successfully" });
		}
	});
});

export default router;
