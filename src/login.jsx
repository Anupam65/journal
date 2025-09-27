import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login = ({ onLoginSuccess }) => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8089/login", {
        email: email,
        password: password,
      });

      if (response.data === "Login successful") {
        alert("✅ Login successful");
        if (onLoginSuccess) {
          onLoginSuccess(); // Optional callback
        }
        navigate("/"); // Navigate to Home.jsx
      } else {
        alert("❌ Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Error connecting to server");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-panel">
        <h2 className="login-title">Journal Management System</h2>
        <h3 className="login-subtitle">User Login</h3>

        <form onSubmit={handleLogin} noValidate>
          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="btn-login">
            Log In
          </button>
        </form>

        <div className="forgot-password">
          <Link to="/reg">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
