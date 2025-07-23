import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import regpic from "../../assets/regpic2.jpeg"; // 📸 Local image

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("User Registered:", formData);
    navigate("/login");
  };

  return (
    <div className="reg-bg">
      <div className="reg-wrapper">
        <div className="reg-card">
          <div className="reg-left">
            <img src={regpic} alt="Smart Test" className="reg-img" />
          </div>

          <div className="reg-right">
            <h2>Register</h2>
            <p className="reg-sub">Join Smart Test Today</p>

            <form onSubmit={handleSubmit} className="reg-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="submit">Sign Up</button>
            </form>

            <p className="reg-login">
              Already registered?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
csssss