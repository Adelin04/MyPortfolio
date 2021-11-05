import React from "react";
import { Link } from "react-router-dom";

//style
import "./ProjectTemplate.css";

const ProjectTemplate = ({ title, to, photo, details }) => {
  return (
    <div className="projectTemplate">
      <div className="wrapper-project">
        <h1 className="title-project">
          {title}
        </h1>
        <Link to={to} className="project-link">
          <img className='project-photo' src={photo} alt={title} />
        </Link>
        <p className="details-project">
          {details}
        </p>
      </div>
    </div>
  );
};

export default ProjectTemplate;
