import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://picsum.photos/700/300" alt="" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          sapiente nulla reiciendis exercitationem cumque amet qui omnis
          accusantium natus pariatur, autem illo dignissimos quaerat libero
          unde! Quae esse, sed eligendi accusantium perspiciatis facere
          voluptates assumenda quas quos nihil quod rem nostrum dignissimos
          repellendus dolorum ullam blanditiis beatae, in, sit praesentium.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Travel</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
