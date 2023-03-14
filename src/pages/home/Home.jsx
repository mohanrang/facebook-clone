import React from "react";
import Topbar from "../../components/topbar/Topbar.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import Feed from "../../components/feed/Feed.jsx";
import Rightbar from "../../components/rightbar/Rightbar.jsx";
import "./Home.css";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Home() {
  const auth = useSelector((res) => {
    return res.auth;
  });

  //   console.log(auth);
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
