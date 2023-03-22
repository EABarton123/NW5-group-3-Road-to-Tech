import { useEffect, useState } from "react";
import Slide from "../components/slide";
import Login from "../components/login";
import "./Home.css";

export function Home() {
	// const [message, setMessage] = useState("Loading...");

	// useEffect(() => {
	// 	fetch("/api")
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error(res.statusText);
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((body) => {
	// 			setMessage(body.message);
	// 		})
	// 		.catch((err) => {
	// 			console.error(err);
	// 		});
	// }, []);

	return (
		<main role="main">
			<div>
				<hr />
				<div className="content"></div>
				<Slide />
				<Login />
				<hr />
			</div>
		</main>
	);
}

export default Home;
