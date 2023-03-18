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