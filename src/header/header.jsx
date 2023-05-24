import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlesm">React & Node</span>
        <span className="headerTitlelg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://picsum.photos/700/300"
        alt="img"
      />
    </div>
  );
};

export default Header;
