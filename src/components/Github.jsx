import React from "react";
import { GithubIcon } from "../images";

const Github = () => {
  return (
    <div className="github_box_">
      <h1 className="github_head">
        <span>Github</span> Projects
      </h1>
      <div className="github_box">
        <div className="github_box1">
          <h3>Free Education (Web App)</h3>
          <p>
            A web application to provide free education for People, who couldn't
            visit School normaly
          </p>
          <a href="" rel="noopener noreferrer">
            <button>
              <img src={GithubIcon} alt="" />
            </button>
          </a>
        </div>
        <div className="github_box2">
          <h3>Weather App (IOS)</h3>
          <p>
            An open source ios app about the weather. It created with Swift and
            Xcode
          </p>
          <a href="" rel="noopener noreferrer">
            <button>
              <img src={GithubIcon} alt="" />
            </button>
          </a>
        </div>
        <div className="github_box3">
          <h3>Crypto World (Web App)</h3>
          <p>Get enouph information about the crypto currency</p>
          <a href="" rel="noopener noreferrer">
            <button>
              <img src={GithubIcon} alt="" />
            </button>
          </a>
        </div>
        <div className="github_box4">
          <h3>Note App (Android)</h3>
          <p>An open source app for android to make daily notes</p>
          <a href="" rel="noopener noreferrer">
            <button>
              <img src={GithubIcon} alt="" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Github;
