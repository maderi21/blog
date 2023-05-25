import React from "react";
import "./write.css";

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src="https://picsum.photos/700/300" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-square-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story"
            className="writeInput writeText"
            type="text"
          ></textarea>
        </div>
        <button className="writeSubmit">PUBLISH</button>
      </form>
    </div>
  );
};

export default Write;
