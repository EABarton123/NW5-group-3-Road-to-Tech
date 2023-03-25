import React from "react";
import "./Main.css";

function Main() {
  return (
    <main className="main-container1">
      <div className="photo-container">
        <img className="photo" src="https://codeyourfuture.io/wp-content/uploads/2022/03/cyf-class-in-session.jpg" alt="CodeYourFuture class in session" />
      </div>
      <div className="right-container">
        <div className="login-container">
          <h2 className="login-heading">LOG IN</h2>
          <form className="login-form">
            <label className="login-label" htmlFor="email">Email:</label>
            <input className="login-input" type="email" id="email" name="email" required />

            <label className="login-label" htmlFor="password">Password:</label>
            <input className="login-input" type="password" id="password" name="password" required />

            <button className="login-button" type="submit">Login</button>
          </form>
        </div>
        <div className="video-container">
          <iframe className="video" width="100%" height="178" src="https://www.youtube.com/embed/jz87O1kap7s" title="Code Your Future"></iframe>
        </div>
      </div>
    </main>
  );
}

export default Main;
