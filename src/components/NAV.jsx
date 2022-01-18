import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { SidebarData } from "./nav/Siedbar";

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [logo, setlogo] = useState("<Rawezh/>");

  return (
    <div className="navi">
      <h1 className="home_headline">
        <Link to="/" className="home_headline_link">
          {logo}
        </Link>
      </h1>
      <ul className="navi_big">
        <li>
          <Link to="/" className="link_all">
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" className="link_all">
            {" "}
            Projects
          </Link>
        </li>
        <li>
          <Link to="aboutme" className="link_all">
            {" "}
            About me
          </Link>
        </li>
        <li>
          <Link to="contact" className="link_all">
            {" "}
            Contact
          </Link>
        </li>
      </ul>

      {/* navi samll */}

      <div className="navBar">
        <FaIcons.FaBars
          onClick={() => showSidebar()}
          style={{
            color: "white",
            marginTop: "30px",
            cursor: "pointer",
            fontSize: "20px",
          }}
        />
      </div>
      <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
        <div className="nav_arrow-up" onClick={() => showSidebar()}></div>
        <ul className="nav-menu-items" onClick={() => showSidebar()}>
          {/* <li className="navbar-toggle">
            <AiIcons.AiOutlineClose className="nav_icon_close" />
          </li> */}
          <li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.class}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
