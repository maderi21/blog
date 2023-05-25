import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <span className="loginTitle">Login</span>
        <label>Email</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your email"
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password"
        />
        <button className="loginButton">Login</button>
        <button className="registerButton">Register</button>
      </form>
    </div>
  );
};

export default Login;
