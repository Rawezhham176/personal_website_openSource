import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/" className="link_all1">
            <FontAwesomeIcon icon={faHome} className="icons" />
            Home
          </Link>
        </li>
        <li>
          <Link to="projets" className="link_all1">
            <FontAwesomeIcon icon={faProjectDiagram} className="icons" />
            Projects
          </Link>
        </li>
        <li>
          <Link to="aboutme" className="link_all1">
            <FontAwesomeIcon icon={faUser} className="icons" />
            About me
          </Link>
        </li>
        <li>
          <Link to="contact" className="link_all1">
            <FontAwesomeIcon icon={faAddressCard} className="icons" />
            Contact
          </Link>
        </li>
      </ul>
      <div className="footer1">
        <h3>Rawezh Hama</h3>
        <h3>Tel: 01738566909</h3>
        <h3>Email: Rawezhhame@gmail.com</h3>
        <h3>Copyright by Rawezh 2022</h3>
      </div>
    </div>
  );
};

export default Footer;
