import React, { useState } from "react";
import { Link } from "react-router-dom";
import PopUp_Template from "./PopUp_Template";

//style
import "./ProjectTemplate.css";

const ProjectTemplate = ({ title, to, photo, details, description }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="projectTemplate">
      <div className="wrapper-project">
        <h1 className="title-project">{title}</h1>
        <Link onMouseEnter={()=>setToggle(true)} onMouseLeave={()=>setToggle(false)} className="project-link" to={to} target={"_blank"}>
          {toggle && <PopUp_Template description={description} />}
          <img className="project-photo" src={photo} alt={title} />
        </Link>
        <p className="details-project">
          {details.map((icon, index) => {
            return (
              <img className="details-project-photo" src={icon} key={index} />
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ProjectTemplate;
