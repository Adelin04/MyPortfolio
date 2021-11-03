import React from "react";
import { Link } from "react-router-dom";

//style
import "./ProjectTemplate.css";

const ProjectTemplate = ({ title, to, photo, details }) => {
  return (
    <div className="projectTemplate">
      template
      <div className="wrapper-project">
        <h1 className="title-project">{title}</h1>
        <Link exact to={to} className="project-photo">
          {photo}
        </Link>
        <p className="details-project">{details}</p>
      </div>
    </div>
  );
};

export default ProjectTemplate;
