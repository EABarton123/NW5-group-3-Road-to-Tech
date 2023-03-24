import { Router } from "express";
import logger from "./utils/logger";
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = Router();
const dotenv = require("dotenv");
dotenv.config();

// const MAILGUN_DOMAIN = process.env.DOMAIN;
// const MAILGUN_API_KEY = process.env.API_KEY;

const mg = require("mailgun-js");
// console.log(process.env);
const mailgun = () =>
	mg({
		apiKey: process.env.API_KEY,
		domain: process.env.DOMAIN,
	});

router.post("/", (request, response) => {
	const textToEveryOne = "Your email has been verified Click Here";
	const { email, certificateNum } = request.body;
	const messageData = {
		from: "adiba.fin@gmail.com",
		to: `${email}`,
		certificateNum: `${certificateNum}`,
		text: `<p> ${textToEveryOne} </p>`,
	};
	mailgun()
		.messages()
		.send(messageData, (error, body) => {
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
