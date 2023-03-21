import React, { useState } from "react";

 const ProfileS = () => {
    const [formData, setFormData]= useState({
        firstName:"",
        // lastName:"",
        // gender:"",
        // email: "",
        // phone:"",
        // address:"",
        // socialMedia:"",
        // numberOfGitCommits:"",
        // codeWarsKataLevel:"",
        // codeWarsPoints:"",
        // codilityTestPoints:"",
        // coverLetter:"",
        // downloadCV:"",
        // educations:"",
        // skills:"",
        // experience:"",
        // qualifications:""
    });

        const handleChange = (event) => {
        const { name, value } = event.target;
            setFormData((prevFormData) => ({ ...prevFormData,
              [name]: value,
             }));
          };

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(formData);
          };

        //   setFormData({
        //   firstName:"",
        //   lastName:"",
        //   gender:"",
        //   email: "",
        //   phone:"",
        //   address:"",
        //   socialMedia:"",
        //   numberOfGitCommits:"",
        //   codeWarsKataLevel:"",
        //   codeWarsPoints:"",
        //   codilityTestPoints:"",
        //   coverLetter:"",
        //   downloadCV:"",
        //   educations:"",
        //   skills:"",
        //   experience:"",
    //     //   qualifications:""
    // });

  return (
      <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>

      <div>
      <h1>Basic Information:</h1>
      <div>
      <label htmlFor>First Name:</label>
      <input type="text" placeholder="Enter Username" name="firstName" required value={formData.firstName} onChange={handleChange} />
      </div>

      <div>
      <label htmlFor>Last Name:</label>
      <input type="text" placeholder="Enter lastName:" name="lastName:" required value={formData.lastName} onChange={handleChange} />
      </div>

      <div>
      <label htmlFor>Address:</label>
      <input type="text" placeholder="Enter Address" name="address:"
       required value={formData.address} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor>Gender:</label>
      <select id="gender" name="gender">
      <option value="{formData.gender}" onChange={handleChange} >Male</option>
      <option value="{formData.gender}" onChange={handleChange}>Female</option>
      <option value="{formData.prefer not to say}" onChange={handleChange}>Prefer not to say</option>
    </select>
      </div>
      </div>

      <div>
      <h1>Contact Details:</h1>
      <div>
      <label htmlFor>Email:</label>
      <input type="text" placeholder="Enter Email:" name="email:"
       required value={formData.email} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor>Phone:</label>
      <input type="text" placeholder="Enter Phone:" name="phone:"
       required value={formData.phone} onChange={handleChange} />
      </div>
      <div>
      <label htmlFor>Social Media:</label>
      <input type="url" id="myURL" placeholder="URL" name="socialMedia:"
       required value={formData.socialMedia} onChange={handleChange} />
       </div>
       </div>
       <div>
       <h1>Constraints:</h1>
      <div>
      <label htmlFor>Number of Git Commits:</label>
      <input type="number" placeholder="" name="Number of Git commits:"
       required value={formData.NumberOfGitCommits} onChange={handleChange} />
      </div>
    <div>
    <label htmlFor>CodeWar Points:</label>
    <input type="link" placeholder="" name="codeWarPoints"
    required value={formData.codeWarPoints} onChange={handleChange} />
    </div>

    <div>
    <label htmlFor>Codility Test points:</label>
    <input type="link" placeholder="" name="codeWarPoints"
    required value={formData.codeWarPoints} onChange={handleChange} />
    </div>
       </div>
      </form>
   </div>
  );
};

export default ProfileS;