import React from "react";
import { Link } from "react-router-dom";
//Style
import "./About_Template.css";

const inlineStyle_icons = {
  width: "auto",
  margin: "0px 15px",
};

const About_Template = ({ personlInfo, iconsList, experince }) => {
  return (
    <div className="about_Template">
      <div className="wrapper-personalInfo">
        <div className="card-personalInfo">
          <p className="email">
            <img style={inlineStyle_icons} src={iconsList.email} alt="email" />
            {personlInfo.email}
          </p>
          <p className="phone">
            <img style={inlineStyle_icons} src={iconsList.phone} alt="phone" />
            {personlInfo.phone}
          </p>
          <p className="address">
            <img
              style={inlineStyle_icons}
              src={iconsList.address}
              alt="address"
            />
            {personlInfo.address}
          </p>
          <p className="linkedin">
            <img
              style={inlineStyle_icons}
              src={iconsList.linkedin}
              alt="linkedin"
            />
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
      <hr style={{ height: "1px" }} />

      <div className="wrapper-work-experince">
        <label>Work Experince</label>
        <div className="card-work-experince">
          {experince.map((exp, index) => {
            return (
              <div className="wrapper-job" key={index}>
                <p className="job-title">{exp.title}</p>
                <p className="job-position">{exp.position}</p>
                <p className="job-from-to">{exp.from_to}</p>
                <hr style={{ height: "1px", color: "black" }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About_Template;
