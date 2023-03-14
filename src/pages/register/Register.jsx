import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import User from "../API/User";

export default function Register() {
  const [authdata, setauthdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [pass, setpass] = useState();

  const HandleAuth = () => {
    console.log(authdata, pass);
    if (
      authdata.password !== pass ||
      authdata.name === "" ||
      authdata.name === "" ||
      authdata.email === ""
    ) {
      alert("User credentials are incorrect");
    } else {
      User(authdata);
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              className="loginInput"
              onChange={(e) => {
                setauthdata({ ...authdata, name: e.target.value });
              }}
              required
            />
            <input
              placeholder="Email"
              className="loginInput"
              onChange={(e) => {
                setauthdata({ ...authdata, email: e.target.value });
              }}
              required
            />
            <input
              placeholder="Password"
              className="loginInput"
              onChange={(e) => {
                setauthdata({ ...authdata, password: e.target.value });
              }}
              required
            />
            <input
              placeholder="Password Again"
              className="loginInput"
              onChange={(e) => {
                setpass(e.target.value);
              }}
              required
            />
            <button className="loginButton" onClick={HandleAuth}>
              Sign up
            </button>
            <button className="loginRgisterButton">
              <Link to="/login" className="link">
                Log into account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
