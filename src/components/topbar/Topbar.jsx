import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Facebook</span>
      </div>
      <div className="topbarCentre">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends , Post or any video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" className="topbarLink2">
            <span className="topbarLink">Home Page</span>
          </Link>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <Popover>
          <PopoverTrigger>
            <img src="/assets/persons/1.jpg" alt="" className="topbarImg" />
          </PopoverTrigger>
          <PopoverContent className="show">
            <PopoverArrow />
            <PopoverCloseButton />
            <Link to="/profile">
              <PopoverHeader>Profile</PopoverHeader>
            </Link>
            <Link to="/login">
              <PopoverBody>Logout</PopoverBody>
            </Link>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
