import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext } from "../controllers/ProfileContext.jsx";
import { validateRegistrationForm } from "../controllers/RegistrationController.jsx";
import '../styles/App.css'; 


const RegistrationForm = () => {
  const { state, dispatch } = useContext(ProfileContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    gender: "",
    address: "",
    pincode: "",
    country: "",
    skills: "",
  });

  const [error, setError] = useState("");

  const requiredFields = [
    { field: "email", message: "Email is required." },
    { field: "gender", message: "Gender is required." },
    { field: "address", message: "Address is required." },
    { field: "country", message: "Country is required." },
    { field: "skills", message: "Skills are required." },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const missingField = requiredFields.find(
      ({ field }) => !formData[field].trim()
    );

    if (missingField) {
      setError(missingField.message);
      return;
    }

    const errorMessage = validateRegistrationForm(formData, state.profiles);

    if (errorMessage) {
      setError(errorMessage);
    } else {
      dispatch({
        type: "REGISTER_USER",
        payload: formData,
      });

      dispatch({
        type: "LOGIN_USER",
        payload: formData,
      });

      setError("");
      navigate("/profile");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container"> 
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error">{error}</p>} 
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="skills"
          placeholder="Skills (comma separated)"
          value={formData.skills}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>

      <div style={{ paddingTop: "20px", textAlign: "center" }}>
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default RegistrationForm;
