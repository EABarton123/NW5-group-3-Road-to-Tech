import React,{ useState }from "react";
import Button from "../../Buttons/Buttons";
import "./Signup.css";
import axios from "axios";

export const Signup = () => {
  const [subFormDate, setSubFormDate] = useState({
    email:"",
    certificateNum: "",
    username:"",
    password:"" });




    const signupSubmit = async (e) =>{
      e.preventDefault();
      console.log("clicked");

    alert(` Email: ${ subFormDate.email}, Certificate Number: ${subFormDate.certificateNum}, UserName: ${subFormDate.username},  Password: ${ subFormDate.password}.`);
          //axios
        // GET, POST
        // API endpoint/Route

    //     const backendURL ="http://localhost:3000/api/signup/grads,";
    //   const response = await axios.post(backendURL, { subFormDate });
    //  console.log(response);

    // setSubFormDate({
    //   email:"",
    //   certificateNum: "",
    //   username:"",
    //   password:"" });
axios
	.post("http://localhost:3000/api/signup/grads", subFormDate)
	.then((res) => {
		console.log(res.data);
		alert("Signup successful!");
		setSubFormDate({
			email: "",
			employeeId: "",
			userName: "",
			password: "",
		});
	})
	.catch((err) => {
		console.error(err);
		alert("Signup failed. Please try again later.");
	});

  };
    return (
    <div className="form-conteiner">
     <form onSubmit={(e) => signupSubmit(e)}>
      <h1> Graduete Sign Up</h1>
      <div>
    <label htmlFor="email"> Email: </label>
    <input type="text" placeholder='Enter Email' name="email" required value={subFormDate.email} onChange = {(e) => setSubFormDate({
  ...subFormDate, email:e.target.value })} />
    </div>

    <div>
    <label htmlFor="certificateNum"> Certificate Number:</label>
    <input type="number" placeholder='Enter Certificate Number'name="certificateNum" required value={subFormDate.certificateNum} onChange = {(e) => setSubFormDate({
  ...subFormDate, certificateNum:e.target.value })} />
    </div>

    <div>
    <label htmlFor="userName"> User Name:</label>
    <input type="text" placeholder='Enter User Name' name="username" required value={subFormDate.username} onChange = {(e) => setSubFormDate({
  ...subFormDate, username:e.target.value })} />
    </div>
    <div>
    <label htmlFor = "password">  Password:</label>
    <input type="password" placeholder="Enter Password" name="password" required value={subFormDate.password} onChange = {(e) => setSubFormDate({
  ...subFormDate, password:e.target.value })} />
    </div>
    <Button Type={"submit"} text={"Sign Up"} />
      </form>
    </div>
  );
    };