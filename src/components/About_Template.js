import React from "react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import { CV_decoded } from "../components/base64_decoded";
import saveIcon from "./icons/save-icon.png";

//Style
import "./About_Template.css";

const CV_MARIN_ADELIN_MARIUS = CV_decoded;

const doc = new jsPDF("p", "px", "letter");
doc.addImage(CV_MARIN_ADELIN_MARIUS, "JPEG", 5, 10, 470, 700);
doc.textWithLink("            ", 180, 95, {
  url: "https://www.linkedin.com/in/adelin-marin-5b1a881b8/"
});
doc.textWithLink("            ", 180, 106, {
  url: "https://github.com/Adelin04"
});
doc.textWithLink("            ", 180, 118, {
  url: "https://adelin-marin-portfolio.netlify.app"
});

const inlineStyle_icons = {
  width: "auto",
  margin: "0px 15px"
};

const inlineStyle_wrapper = {
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  flexDirection: "column"
};

const About_Template = ({
  personlInfo,
  iconsList,
  experince,
  schools,
  languages,
  certifications,
  projects
}) => {
  return (
    <div className="about_Template">
      <div style={{ overflowY: "auto" }}>
        <button
          className="btn-save"
          style={{ width: "auto", height: "auto", margin: "10px 55px" }}
          onClick={() => {
            doc.save("Marin Adelin Marius.pdf");
          }}
        >
          <img
            style={{ width: "30px", height: "auto" }}
            src={saveIcon}
            alt="savev"
          />
        </button>
        <div className="wrapper-personalInfo">
          <div className="card-personalInfo">
            <p className="email">
              <img
                style={inlineStyle_icons}
                src={iconsList.email}
                alt="email"
              />
              {personlInfo.email}
            </p>
            <p className="phone">
              <img
                style={inlineStyle_icons}
                src={iconsList.phone}
                alt="phone"
              />
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
              <Link to={{ pathname: personlInfo.linkedin }} target="_blank">
                LinkedIn
              </Link>
            </p>
            <p className="github">
              <img style={inlineStyle_icons} src={iconsList.github} />
              <Link to={{ pathname: personlInfo.github }} target="_blank">
                Github
              </Link>
            </p>
          </div>

          <img className="photo" src={personlInfo.photo} />
        </div>
        <hr style={{ height: "1px" }} />
        <div className="wrapper-developer-experince">
          <div className="wrapper-label-developer-experince">
            <label>Developer Experince </label>
            <span>
              You can see all the projects in the{" "}
              <Link
                to={{ pathname: "/projects" }}
                style={{
                  textDecoration: "none ",
                  fontWeight: "bolder",
                  color: "black"
                }}
              >
                PROJECTS
              </Link>{" "}
              tab
            </span>
          </div>
          <div className="card-developer-experince">
            {projects.map((project, index) => {
              return (
                <div
                  className="wrapper-developer-experince-project"
                  key={index}
                >
                  <p className="project-title">
                    {project.title}
                  </p>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <hr style={{ height: "1px", color: "black" }} />
                </div>
              );
            })}
          </div>
        </div>
        <hr style={{ height: "1px" }} />
        <div className="wrapper-work-experince">
          <label>Work Experince</label>
          <div className="card-work-experince">
            {experince.map((exp, index) => {
              return (
                <div className="wrapper-job" key={index}>
                  <p className="job-title">
                    {exp.title}
                  </p>
                  <p className="job-position">
                    {exp.position}
                  </p>
                  <p className="job-from-to">
                    {exp.from_to}
                  </p>
                  <hr style={{ height: "1px", color: "black" }} />
                </div>
              );
            })}
          </div>
        </div>
        <hr style={{ height: "1px" }} />
        <div className="wrapper-education">
          <label>Education</label>
          <div className="card-education">
            {schools.map((school, index) => {
              return (
                <div style={inlineStyle_wrapper} key={index}>
                  <p className="school-profile">
                    {school.profile}
                  </p>
                  <p className="school-name">
                    {school.name}
                  </p>
                  <p className="school-from-to">
                    {school.from_to}
                  </p>
                  <hr style={{ height: "1px", color: "black" }} />
                </div>
              );
            })}
          </div>
        </div>
        <hr style={{ height: "1px" }} />
        <div className="wrapper-certifications">
          <label>Certifications</label>
          <div className="card-certifications">
            {certifications.map((certification, index) => {
              return (
                <div style={inlineStyle_wrapper} key={index}>
                  <p className="certification">
                    {certification.name} {`${certification.certification}`}
                  </p>
                  <p>Modul 1 : Fundamentals of programming C/C++ Algorithms</p>
                  <p>Modul 2 : C# OOP</p>
                  <span>Modul 3 : </span>
                  <div style={{ display: "flex" }}>
                    <li> Python </li>
                    <li> Flask</li>
                    <li> Java Script </li>
                    <li> React Js</li>
                  </div>
                  <span>Modul 4 :</span>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <li> Java </li>
                    <li> Spring Boot</li>
                    <li> Maven </li>
                    <li> Hibernate </li>
                    <li> MySQL</li>
                    <li>Cucumber</li>
                    <li> Selenium </li>
                  </div>

                  <hr style={{ height: "1px", color: "black" }} />
                </div>
              );
            })}
          </div>
        </div>
        <hr style={{ height: "1px" }} />
        <div className="wrapper-languages">
          <label>Languages</label>
          <div className="card-languages">
            {languages.map((language, index) => {
              return (
                <div style={inlineStyle_wrapper} key={index}>
                  <p className="language">
                    {language.language} {`(${language.nivel})`}
                  </p>
                  <hr style={{ height: "1px", color: "black" }} />
                </div>
              );
            })}
          </div>
        </div>
        <hr style={{ height: "1px" }} />
      </div>
    </div>
  );
};

export default About_Template;
