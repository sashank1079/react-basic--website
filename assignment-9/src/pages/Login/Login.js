import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      navigate("/home");
    } else {
      const error = await response.json();
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    // Check if user is already logged in and redirect to dashboard or home page
  }, []);

  return (
    <div className="login-page">
      <h1 className="login-heading">Login</h1>
      {errorMessage && <p className="login-error">{errorMessage}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email" className="login-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
          className="login-input"
        />
        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
