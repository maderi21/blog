import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="toListItem">HOME</li>
          <li className="toListItem">ABOUT</li>
          <li className="toListItem">CONTACT</li>
          <li className="toListItem">WRITE</li>
          <li className="toListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImage" src="https://picsum.photos/50/30" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass-plus"></i>
      </div>
    </div>
  );
};

export default TopBar;
