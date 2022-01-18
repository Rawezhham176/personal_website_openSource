import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";

const Bubles = () => {
  return (
    <div className="bubble_box">
      <div className="aboutme_text">
        <h1>Who am I?</h1>
        <p>
          I'm Rawezh from hamburg. I do my study to Software engineer at the
          moment and beside iam working as Software engeneur. I have worked
          already with many popular programming languages like Java(Spring
          Boot), JavaScript(ReactJs, NextJs), Python(Flask), Scala. And i have
          with experience GCP, Html, Css, Docker, SQL. Before my study i have
          worked as Graphic Designer.
        </p>
      </div>
      <hr />
      <div className="skills">
        <h1>Skills</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faReact} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faNodeJs} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faAws} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faJava} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faCloud} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faGoogle} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faHtml5} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinux} className="icons_skills" />
          </li>
          <li>
            <FontAwesomeIcon icon={faDatabase} className="icons_skills" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bubles;
