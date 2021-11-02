import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLink_Template.css";

const NavLink_Template = ({ linkName, to }) => {
  return (
    <section className="links">
      <NavLink className="navLinkTemplate-links" to={to}>
        {linkName}
      </NavLink>
    </section>
  );
};

export default NavLink_Template;
