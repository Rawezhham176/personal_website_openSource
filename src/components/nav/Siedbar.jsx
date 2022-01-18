import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GoIcons from "react-icons/go";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome className="icon_nav" />,
    class: "nav-text",
  },
  {
    title: "Projects",
    path: "projects",
    icon: <GoIcons.GoProject className="icon_nav" />,
    class: "nav-text",
  },
  {
    title: "About me",
    path: "aboutme",
    icon: <MdIcons.MdAccountCircle className="icon_nav" />,
    class: "nav-text",
  },
  {
    title: "Contact",
    path: "contact",
    icon: <MdIcons.MdChatBubble className="icon_nav" />,
    class: "nav-text",
  },
];
