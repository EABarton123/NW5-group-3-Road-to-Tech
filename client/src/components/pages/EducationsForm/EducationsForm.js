import React, { useState } from "react";
import "./EducationsForm.css";

const EducationsForm = ({ onSubmit }) => {
  const [schoolName, setSchoolName] = useState("");
  const [degree, setDegree] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const education = { schoolName, degree, graduationYear };
    onSubmit(education);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        School Name:
        <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
      </label>
      <label>
        Degree:
        <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />
      </label>
      <label>
        Graduation Year:
        <input type="text" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
      </label>
      <button type="submit">Add Education</button>
    </form>
  );
};

export default EducationsForm;