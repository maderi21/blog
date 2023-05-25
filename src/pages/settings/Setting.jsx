import React from "react";
import "./setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <div className="form settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src="https://picsum.photos/700/300" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-sharp fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Marek" />
          <label>Email</label>
          <input type="email" placeholder="Marek@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
