import Slide from "./Slide/slide";
import Login from "./Login/login";

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
