import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <span className="loginTitle">Register</span>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your Username"
        />
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
        <button className="loginButton">Register</button>
        <button className="registerButton">Login</button>
      </form>
    </div>
  );
};

export default Register;
