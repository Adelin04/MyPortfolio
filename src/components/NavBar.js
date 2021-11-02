import React from "react";
import NavLink_Template from "./NavLink_Template";

//Style
import "./NavBar.css";

const NavBar = ({ links }) => {
  return (
    <div className="navBar">
      {links.map((link, index) => {
        return (
          <div className="link" key={index}>
            <NavLink_Template to={link.to} linkName={link.link} />
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
