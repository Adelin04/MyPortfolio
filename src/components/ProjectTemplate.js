import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PopUp_Template from "./PopUp_Template";

//style
import "./ProjectTemplate.css";

const ProjectTemplate = ({
  title,
  to,
  photo,
  details,
  description,
  toGhithub
}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="projectTemplate">
      <div className="wrapper-project">
        <h1 className="title-project">
          {title}
        </h1>

        <Link
          onMouseOver={() => setToggle(true)}
          onMouseLeave={() => setToggle(false)}
          className="project-link"
          to={to}
          target={"_blank"}
        >
          <WrapperPopUp>
            {toggle &&
              <PopUp_Template
                description={description}
                toGhithub={toGhithub}
              />}
            <img
              style={{ zIndex: "-1" }}
              className="project-photo"
              src={photo}
              alt={title}
            />
          </WrapperPopUp>
        </Link>

        <p className="details-project">
          {details.map((icon, index) => {
            return (
              <img
                className="details-project-photo"
                src={icon}
                key={index}
                alt={icon.toString()}
              />
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default ProjectTemplate;

const WrapperPopUp = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;

  @media screen and (max-width: 500px) {
    width: 190px;
    height: auto;

    .project-link {
      width: 190px;
      height: auto;
    }

    .project-photo {
      width: 190px;
      height: auto;
      margin: 5px;
      border-radius: 14px;
    }
  }
`;
