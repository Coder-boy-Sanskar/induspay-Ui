import React, { useState } from "react";
import "./contact.css"; // Include your CSS styles here
import Header from "../../components/header/Header";

const UserForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    emailId: "",
    age: 0,
    gender: "",
    mobilenumber: "",
    pan_no: "",
    adhaar_no: "",
    status: false,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (!formData.pan_no || !panPattern.test(formData.pan_no)) {
      newErrors.pan_no = "PAN number must be in the format: ABCDE1234F";
    }

    if (!formData.gender || formData.gender == "Select--") {
      newErrors.gender = "Gender is required"; // Add validation for gender
    }
    if (!formData.first_name) newErrors.first_name = "First name is required";
    if (!formData.last_name) newErrors.last_name = "Last name is required";
    if (!formData.emailId || !/\S+@\S+\.\S+/.test(formData.emailId))
      newErrors.emailId = "Valid email is required";
    if (!formData.age || formData.age < 1 || formData.age > 100)
      newErrors.age = "Age must be between 1 and 100";
    if (
      !formData.mobilenumber ||
      formData.mobilenumber.toString().length !== 10
    )
      newErrors.mobilenumber = "Mobile number must be 10 digits";

    if (!formData.adhaar_no || formData.adhaar_no.toString().length !== 12)
      newErrors.adhaar_no = "Aadhaar number must be 12 digits";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // If the field is a select dropdown (like "status"), convert the value to a boolean
    setFormData({
      ...formData,
      [name]:
        type === "select-one"
          ? value === "true"
          : type === "checkbox"
          ? checked
          : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset the errors state to an empty object
    setErrors({});

    // Perform form validation
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // If there are no errors, submit the form data

      const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in ISO format

      const formDataWithDate = {
        ...formData,
        createdAt: currentDate, // Add the current date to formData
      };
      console.log("Form Data Submitted:", formDataWithDate);



      // Send POST request to the API
      fetch("https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithDate), // Convert formData to JSON
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Form Submitted Successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error submitting the form");
        });
    } else {
      // If there are validation errors, set them in the state
      setErrors(formErrors);
    }
  };

  return (
    <section className="contain contact-container">
      <Header />
      <div style={{ marginTop: "50px" }}>
        <h1>Contact Us</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {/* Left Half */}
          <div className="form-column">
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
              />
              {errors.first_name && (
                <span className="error">{errors.first_name}</span>
              )}
            </div>

            <div>
              <label>Email ID:</label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
              />
              {errors.emailId && (
                <span className="error">{errors.emailId}</span>
              )}
            </div>

            <div>
              <label>Gender:</label>
              <select
                style={{ cursor: "pointer"}}
                type="select-one"
                name="gender"
                value={formData.gender}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                   gender:e.target.value
                  });
                }}
              >
                <option value="select">Select--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
            </div>

            <div>
              <label>PAN No:</label>
              <input
                type="text"
                name="pan_no"
                value={formData.pan_no}
                onChange={handleChange}
              />
              {errors.pan_no && <span className="error">{errors.pan_no}</span>}
            </div>
          </div>

          {/* Right Half */}
          <div className="form-column">
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
              />
              {errors.last_name && (
                <span className="error">{errors.last_name}</span>
              )}
            </div>

            <div>
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              {errors.age && <span className="error">{errors.age}</span>}
            </div>

            <div>
              <label>Mobile Number:</label>
              <input
                type="tel"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={handleChange}
              />
              {errors.mobilenumber && (
                <span className="error">{errors.mobilenumber}</span>
              )}
            </div>

            <div>
              <label>Aadhaar No:</label>
              <input
                type="number"
                name="adhaar_no"
                value={formData.adhaar_no}
                onChange={handleChange}
              />
              {errors.adhaar_no && (
                <span className="error">{errors.adhaar_no}</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <label>Status:</label>
          <select
            name="status"
            value={formData.status ? "true" : "false"}
            onChange={handleChange}
            style={{ cursor: "pointer", width: "250px", marginBottom: "90px" }}
          >
            <option value="false">False</option>
            <option value="true">True</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default UserForm;
