import React from "react";
import NavBar from "./NavBar";

//Style
import "./SideBar.css";

const links = [
  { link: "About", to: "/about" },
  { link: "Skills", to: "/skills" },
  { link: "Projects", to: "/projects" },
];

const SideBar = () => {
  return (
    <div className="slider">
      <NavBar links={links} />
    </div>
  );
};

export default SideBar;
