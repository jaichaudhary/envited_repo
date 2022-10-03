import React from "react";
import "./Heropage.css";
import { GiPartyPopper } from "react-icons/gi";
import { Link } from "react-router-dom";

function Heropage() {
  return (
    <div className="heropage">
      <div className="heropage__left">
        <div className="heropage__left-text">
          <p className="heropage__heading">Imagine if</p>
          <p className="heropage__heading text-gradient">Snapchat</p>
          <p className="heropage__heading">had events.</p>

          <p className="heropage__text">
            Easily host and share events with your friends across any social
            media.
          </p>
        </div>
        <Link to={"/create"} className="heropage__left-btn">
          <GiPartyPopper color="white" />
          <p className="btn__text">Create my event</p>
        </Link>
      </div>
      <div className="heropage__right">
        <img className="heropage__shot" src={"./Images/app_shot.svg"} />
        <Link to={"/create"} className="heropage__btn">
          <GiPartyPopper color="white" />
          <p className="btn__text">Create my event</p>
        </Link>
      </div>
    </div>
  );
}

export default Heropage;
