import  MenuItem  from "./menuItem";
import  SignupMenu  from "./signupMenu";
import React from "react";
import "../assets/css/menu.css";
import "../assets/css/customMenu.css";
import "../assets/css/menuItem.css";
import logo from "../assets/css/cyf_logo.png";
// import { width } from "@material-ui/system";
function CustomHeader( { MenuItemTexts }) {
  return(
    <div className='MenuRow'>
         <img style={{ margin:45,padding:0,borderRadius:15 }}
         width={288} height={70} src={logo} alt="Logo"></img>
    {
    MenuItemTexts.map((item) => {
       return <div className='Box' key={item} id={item}><MenuItem menuText={item} /></div>;
      })
    }
    <SignupMenu />
    </div>
  );
}
export default CustomHeader;
