import React,{ Component } from "react";
// import "./App.css";

import  Slide  from "./components/slide";
import  Login  from "./components/login";
import "./assets/css/content.css";
class App extends Component {

  render() {
    return (
    <>
     <div className="maincontainer">

      <hr />
      <div className='content'>
       <Slide />
       <Login />
       </div>
      <hr />

    </div>
    </>
   );
  }
}

export default App;

// import React,{ Component } from "react";
// // import "./App.css";

// import  Slide  from "./components/slide";
// import  Login  from "./components/login";
// import "./assets/css/content.css";

// class App extends Component {

// 	render() {
// 		return (

// 					<Routes>
// 						<Route path="/" element={<Home />} />
// 						<Route path="/about" element={<About />} />
// 					</Routes>

// 		);
// 	}
// }

// export default App;

// // import React, { Component } from "react";
// // import { Routes, Route } from "react-router-dom";
// // import Slide from "./components/slide";
// // import Login from "./components/login";
// // import Home from "./home";
// // import About from "./about";
// // import "./assets/css/content.css";

// // class App extends Component {
// // 	render() {
// // 		return (
// // 			<>
// // 				<div className="maincontainer">
// // 					<hr />
// // 					<div className="content">
// // 						<Slide />
// // 						<Login />
// // 						<Routes>
// // 							<Route path="/" element={<Home />} />
// // 							<Route path="/about" element={<About />} />
// // 						</Routes>
// // 					</div>
// // 					<hr />
// // 				</div>
// // 			</>
// // 		);
// // 	}
// // }

// // export default App;
