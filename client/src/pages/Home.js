import Slide from "../components/slide";
import Login from "../components/login";
import "./Home.css";

export function Home() {
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
