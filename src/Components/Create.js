import React from "react";
import "./create.css";
import { HiCamera } from "react-icons/hi";

function InputField({ title }) {
  return (
    <div className="input__parent">
      <p className="input__title">{title}</p>
      <input className="input" />
    </div>
  );
}

function Create() {
  return (
    <div className="create">
      <p className="heropage__heading">Create your event</p>
      <div className="create__divide">
        <div className="create__left">
          <div className="create__upload">
            <img className="upload__img" src="./Images/add_pic.png" />
            <div className="create__upload-overlay">
              <HiCamera size={50} color="white" />
              <p className="btn__text">Choose a photo</p>
            </div>
          </div>
        </div>
        <div className="create__right">
          <InputField title={"My event is called"} />
          <InputField title={"It starts at"} />
          <InputField title={"It ends at (optional)"} />
          <InputField title={"It’s happening at (optional)"} />
          <InputField title={"Add a URL link"} />
          <InputField title={"Description"} />
        </div>
      </div>
    </div>
  );
}

export default Create;
