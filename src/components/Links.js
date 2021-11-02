import React from "react";
import { NavLink } from "react-router-dom";

const Links = ({ link, to }) => {
  return (
    <div className="links">
      <NavLink to={to}>
        <p className="link">
          {link}
        </p>
      </NavLink>
    </div>
  );
};

export default Links;
