import React, { useState } from "react";
import "./SkillsForm.css";

const SkillsForm = () => {
  const [skills, setSkills] = useState([]);

  const handleAddSkill = (e) => {
    e.preventDefault();
    const skillInput = e.target.elements.skill;
    const newSkill = skillInput.value.trim();
    if (newSkill) {
      setSkills([...skills, newSkill]);
      skillInput.value = "";
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div>
      <h3>Skills</h3>
      <form onSubmit={handleAddSkill}>
        <input type="text" name="skill" placeholder="Add a skill" />
        <button type="submit">Add</button>
      </form>
      {skills.length > 0 && (
        <ul>
          {skills.map((skill) => (
            <li key={skill}>
              {skill}
              <button onClick={() => handleRemoveSkill(skill)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SkillsForm;
