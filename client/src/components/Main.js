import React from "react";
import MainCSS from "./Main.module.css";

function Main() {
	return (
		<main className={MainCSS.main}>
			<div className={MainCSS.photo}>
				<img
					className={MainCSS.photo1}
					src="https://codeyourfuture.io/wp-content/uploads/2022/03/cyf-class-in-session.jpg"
					alt="CodeYourFuture class in session"
				/>
			</div>
			<div className={MainCSS.right}>
				<div className={MainCSS.login}>
					<h2 className={MainCSS.logh2}>LOG IN</h2>
					<form className={MainCSS.mainform}>
						<label className={MainCSS.labelform} htmlFor="email">
							Email:
						</label>
						<input
							className={MainCSS.inputemail}
							type="email"
							id="email"
							name="email"
							required
						/>

						<label className={MainCSS.labelform} htmlFor="password">
							Password:
						</label>
						<input
							className={MainCSS.inputpassword}
							type="password"
							id="password"
							name="password"
							required
						/>

						<button className={MainCSS.formbutton} type="submit">
							Login
						</button>
					</form>
				</div>
				<div className={MainCSS.video1}>
					<iframe
						width="100%"
						height="178"
						src="https://www.youtube.com/embed/jz87O1kap7s"
						title="Code Your Future"
					></iframe>
				</div>
			</div>
		</main>
	);
}

export default Main;
