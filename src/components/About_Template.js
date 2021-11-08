import React from "react";
import { Link } from "react-router-dom";
//Style
import "./About_Template.css";

const inlineStyle_icons = {
  width: "auto",
  margin: "0px 15px"
};

const About_Template = ({ personlInfo, iconsList }) => {
  return (
    <div className="about_Template">
      <div className="wrapper-personalInfo">
        <div className="card-personalInfo">
          <p className="email">
            <img style={inlineStyle_icons} src={iconsList.email} />
            {personlInfo.email}
          </p>
          <p className="phone">
            <img style={inlineStyle_icons} src={iconsList.phone} />
            {personlInfo.phone}
          </p>
          <p className="address">
            <img style={inlineStyle_icons} src={iconsList.address} />
            {personlInfo.address}
          </p>
          <p className="linkedin">
            <img style={inlineStyle_icons} src={iconsList.linkedin} />
            <Link to={personlInfo.linkedin} target="_blank">
              LinkedIn
            </Link>
          </p>
          <p className="github">
            <img style={inlineStyle_icons} src={iconsList.github} />
            <Link to={personlInfo.github} target="_blank">
              Github
            </Link>
          </p>
        </div>

        <img className="photo" src={personlInfo.photo} />
      </div>
      <hr />
    </div>
  );
};

export default About_Template;
