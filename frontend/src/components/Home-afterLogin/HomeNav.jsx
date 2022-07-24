import React from "react";
import "./home.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsPlayCircle } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
{
  /* BsThreeDotsVertical */
}

export const HomeNav = () => {
  return (
    <div id="top">
      <div>
        <span>
          <BiSearchAlt2 id="searchIcon" />
        </span>
        <input type="text" placeholder="Search" />
      </div>
      <div className="crown">
        <div>
          <button className="b1">
            <FaCrown /> Start Free Trial
          </button>
        </div>
        <div>
          <button className="b2">
            <BsPlayCircle className="play" />
          </button>
        </div>
        <div>Start Timer</div>
      </div>
    </div>
  );
};
