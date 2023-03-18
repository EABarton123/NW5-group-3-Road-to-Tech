import React,{ Component } from "react";
import "./App.css";
import CustomHeader from "./components/customHeader"; //Include Heder


class App extends Component {
  MenuItemTexts=["STORIES","INTERVIEW TIPS","GRADUATE RESOURCES"];
  render() {
    return (
     <div className="maincontainer">
      <CustomHeader MenuItemTexts={this.MenuItemTexts}></CustomHeader>
      <hr />
       <div className="container mb-5 mt-5">
        <h1 className="mr-5 mt-5">This is main container!!</h1>
      </div>
      <hr />
    </div>
   );
  }
}

export default App;