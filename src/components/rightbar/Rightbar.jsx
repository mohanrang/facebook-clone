import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola foster</b> and <b>3 others</b> have a birthday today.
          </span>
        </div>
        <img className="rignhtbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarfriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Vizag</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Andhra Pradhesh</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/persons/5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sowmya</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/6.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">Barath Vamsi</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/7.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">Sai Monohar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">&nbsp;&nbsp;&nbsp;Leeladhar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/9.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">&nbsp;&nbsp;&nbsp;Yeswanth</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">&nbsp;&nbsp;&nbsp;Vidhya Sri</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/persons/10.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingname">&nbsp;&nbsp;&nbsp;Pavan Sai</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
