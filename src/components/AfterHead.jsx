import React from "react";
import { GithubIcon, LinkedIn, Facebook, Instagram, Xing } from "../images";

const AfterHead = () => {
  return (
    <div className="afterhead_box">
      <ul>
        <li>
          {" "}
          <a href="" rel="noopener noreferrer">
            <img src={Facebook} alt="" />
          </a>
        </li>
        <li>
          {" "}
          <a href="" rel="noopener noreferrer">
            <img src={Instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="" rel="noopener noreferrer">
            <img src={LinkedIn} alt="" />
          </a>
        </li>
        <li>
          {" "}
          <a href="" rel="noopener noreferrer">
            <img src={Xing} alt="" />
          </a>
        </li>
        <li>
          {" "}
          <a href="" rel="noopener noreferrer">
            <img src={GithubIcon} alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AfterHead;
