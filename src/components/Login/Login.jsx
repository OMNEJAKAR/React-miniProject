import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "../Home/Header";
import omkarImage from '../AllImages/SEVA2.png';
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send a POST request to the backend with login data
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),  // username is the name (user's name)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        const userName = data.user.username;
        localStorage.setItem('username',userName); 
        console.log("Login successful, user:", data.user.username);  // Log successful login
        // Redirect to dashboard page with the name
        // window.location.href = `/dashboard?name=${data.name}`;
        window.location.href = `/`;
      } else {
        console.error("Login failed:", data.error);  // Log error message if login fails
        setErrorMessage(data.error || "Invalid username or password");
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };
  
  const bodyram = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#0000ff",
}

  return (
    <div >
    <Header />
    <div className="login-page" style={bodyram}>
      <img src={omkarImage} alt="Logo" id="logo" />
      <div className="login-container">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-cred"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-cred"
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p id="error-message">{errorMessage}</p>}
      </div>
      <span
        style={{ color: "white", position: "absolute", bottom: "22%", left: "35%" }}
        title="Create a new account"
      >
        Don't have an account? <Link to="/signup">SignUp</Link>
      </span>
    </div>
    </div>
  );
};

export default Login;
