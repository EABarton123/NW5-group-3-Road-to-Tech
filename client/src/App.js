import React,{ Component } from "react";
import "./App.css";
import CustomHeader from "./components/customHeader"; //Include Heder


class App extends Component {
  MenuItemTexts=["STORIES","INTERVIEW TIPS","GRADUATE RESOURCES"];
  render() {
    return (
     <div className="maincontainer">
      <CustomHeader MenuItemTexts={this.MenuItemTexts}></CustomHeader>
    </div>
   );
  }
}

export default App;