import React,{ useState }from "react";
import Button from "../../Buttons/Buttons";
import "./Signup.css";

export const Signup = () => {
  const [subFormDate, setSubFormDate] = useState({
    email:"",
    employeeId: "",
    userName:"",
    password:"" });

    const signupSubmit =(e) =>{
      e.preventDefault();
      console.log("clicked");

    alert(` Email ${ subFormDate.email}, EmployeeId: ${subFormDate.employeeId}, UserName: ${subFormDate.userName},  Password: ${ subFormDate.password},`);
    setSubFormDate({
      email:"",
      employeeId: "",
      userName:"",
      password:"" });
  };
    return (
    <div className="form-conteiner">
     <form onSubmit={(e) => signupSubmit(e)}>
      <h1> Admin SIGN UP</h1>
      <div>
    <label> Email: </label>
    <input type="text" placeholder='Email' value={subFormDate.email} onChange = {(e) => setSubFormDate({
  ...subFormDate, email:e.target.value })} />
    </div>

    <div>
    <label> Employee ID:</label>
    <input type="number" placeholder='Employee ID' value={subFormDate.employeeId} onChange = {(e) => setSubFormDate({
  ...subFormDate, employeeId:e.target.value })} />
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