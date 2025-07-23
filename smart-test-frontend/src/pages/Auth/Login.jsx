// src/pages/Auth/Login.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Integrate API call here
    console.log("Logging in with:", formData);

    // Simulate login success
    navigate("/admin-dashboard");
  };

  return (
    <div className="login-page">
      {/* Left Image Side */}
      <div className="login-image-section">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/secure-login-5282584-4414103.png"
          alt="Login Illustration"
          className="login-image"
        />
      </div>

      {/* Right Form Side */}
      <div className="login-form-section">
        <div className="login-card">
          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Login to continue your test platform</p>

          <form onSubmit={handleSubmit} className="login-form">
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

            <button type="submit" className="login-btn">Login</button>
          </form>

          <p className="register-redirect">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/register")}>Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
