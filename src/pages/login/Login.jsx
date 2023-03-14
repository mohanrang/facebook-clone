import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Action from "../../Redux/Action";
import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../API/User";

export default function Login() {
  const dispatch = useDispatch();
  const [authdata, setauthdata] = useState({
    email: "",
    password: "",
  });

  const auth = useSelector((res) => {
    return res.auth;
  });
  const HandleLogin = () => {
    // console.log(authdata);
    login(authdata);
  };

  // console.log(auth);
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
            <button className="loginButton" onClick={HandleLogin}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRgisterButton">
              <Link to="/register" className="link">
                Create a new Account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
