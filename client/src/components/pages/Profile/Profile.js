import React, { useState } from "react";
import DownloadCV from "../DownloadCv/DownloadCv";

const CandidateDashboard = () =>{
  // State variables to hold the search values
  const [jobTitle, setJobTitle] = useState("");
  const [address, setAddress] = useState("");

  // State variables to hold the candidate information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [socialMedia, setSocialMedia] = useState("");
  const [gitCommits, setGitCommits] = useState(0);
//   const [codeWarKataLevel, setCodeWarKataLevel] = useState('');
//   const [codeWarPoints, setCodeWarPoints] = useState(0);
//   const [codilityTestPoints, setCodilityTestPoints] = useState(0);
//   const [coverLetter, setCoverLetter] = useState('');
//   const [education, setEducation] = useState('');
//   const [skills, setSkills] = useState('');

  // Event handler for the search button
  const handleSearch = () => {
    // Code to search for job openings based on the jobTitle and address values
  };

  // Event handler for the submit button
  const handleSubmit = () => {
    // Code to submit the candidate information to the server
  };

  return (
    <div>
      <h1>Profile</h1>

      <h2>Search</h2>
      <div>
        <label>Job Title</label>
        <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
      </div>
      <div>
        <label>Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <button onClick={handleSearch}>Search</button>

      <h2>Basic Information</h2>
      <div>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </div>
      <div>
        <label>Gender</label>
        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </div>

      <h2>Contact Details</h2>
      <div>
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Social Media</label>
        <input type="text" value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)} />
      </div>

      <h2>Constraints</h2>
      <div>
        <label>Number of Git Commits</label>
        <input type="text" value={gitCommits} onChange={(e) => setGitCommits(e.target.value)} />
        </div>
        <div>
          <DownloadCV />
        </div>
        </div>
  );
};
        export default CandidateDashboard;