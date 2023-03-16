import React,{ useState }from "react";
import Button from "../../Buttons/Buttons";
import "./Signup.css";

export const Signup = () => {
  const [subFormDate, setSubFormDate] = useState({
    email:"",
    certificateNumber: "",
    userName:"",
    password:"" });

    const signupSubmit =(e) =>{
      e.preventDefault();
      console.log("clicked");

    alert(` Email ${ subFormDate.email}, Certificate Number: ${subFormDate.certificateNumber}, UserName: ${subFormDate.userName},  Password: ${ subFormDate.password},`);
    setSubFormDate({
      email:"",
      certificateNumber: "",
      userName:"",
      password:"" });
  };
    return (
    <div className="form-conteiner">
     <form onSubmit={(e) => signupSubmit(e)}>
      <h1> Graduete SIGN UP</h1>
      <div>
    <label> Email: </label>
    <input type="text" placeholder='Email' value={subFormDate.email} onChange = {(e) => setSubFormDate({
  ...subFormDate, email:e.target.value })} />
    </div>

    <div>
    <label> Certificate Number:</label>
    <input type="number" placeholder='Certificate Number' value={subFormDate.certificateNumber} onChange = {(e) => setSubFormDate({
  ...subFormDate, certificateNumber:e.target.value })} />
    </div>

    <div>
    <label> UserName:</label>
    <input type="text" placeholder='UserName' value={subFormDate.userName} onChange = {(e) => setSubFormDate({
  ...subFormDate, userName:e.target.value })} />
    </div>
    <div>
    <label>  Password:</label>
    <input type="password" placeholder="Password" value={subFormDate. password} onChange = {(e) => setSubFormDate({
  ...subFormDate,password:e.target.value })} />
    </div>
    <Button />
      </form>
    </div>
  );
    };