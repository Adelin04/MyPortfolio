import React from "react";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import { CV_decoded } from "../components/base64_decoded";
import saveIcon from "./icons/save-icon.png";
import portfolioIcon from "./icons/portfolio.svg";

//Style
import "./About_Template.css";

const CV_MARIN_ADELIN_MARIUS = CV_decoded;

// const img = new Image();
// img.onload = () => {
// };

const doc = new jsPDF("p", "px", "letter");
doc.addImage(CV_MARIN_ADELIN_MARIUS, "PNG" || "png", 0, 0, 459, 602);

//  LINKS INFO
doc.textWithLink("_______________", 35, 401, {
  url: "https://github.com/Adelin04",
});
doc.textWithLink("_____________________", 35, 416, {
  url: "https://adelin-marin-portfolio.netlify.app",
});
doc.textWithLink("_____________________", 35, 436, {
  url: "https://www.linkedin.com/in/adelin-marin-5b1a881b8/",
});

//  LINKS PROJECTS
/* doc.textWithLink("                                    ", 190, 54, {
  url: "https://github.com/Adelin04/Ecommerce.Net.Server",
});

doc.textWithLink("                                    ", 190, 62, {
  url: "https://github.com/Adelin04/E-commerce.React.Client",
});

doc.textWithLink("                                    ", 190, 177, {
  url: "https://github.com/Adelin04/projects.server",
});

doc.textWithLink("                                    ", 190, 185, {
  url: "https://github.com/Adelin04/projects.client",
});

doc.textWithLink("                                    ", 190, 280, {
  url: "https://github.com/Adelin04/waterboat",
});

doc.textWithLink("                                    ", 190, 340, {
  url: "https://github.com/Adelin04/Snake",
});

doc.textWithLink("                                    ", 190, 370, {
  url: "https://github.com/Adelin04/Bibliotech",
}); */

const inlineStyle_wrapper = {
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  flexDirection: "column",
};

const About_Template = ({
  personlInfo,
  iconsList,
  experince,
  schools,
  languages,
  certifications,
  projects,
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
            alt="CV"
          />
        </button>
        <div className="wrapper-personalInfo">
          <div className="name">
            <span>Adelin Marin</span>
          </div>

          <div className="wrapper-card-personalInfo">
            <div className="card-personalInfo">
              <p className="linkedin">
                <img src={iconsList.linkedin} alt="linkedin" />
                <Link to={{ pathname: personlInfo.linkedin }} target="_blank">
                  <span>LinkedIn</span>
                </Link>
              </p>
              <p className="github">
                <img src={iconsList.github} />
                <Link to={{ pathname: personlInfo.github }} target="_blank">
                  <span>Github</span>
                </Link>
              </p>
              <p className="github">
                <img src={portfolioIcon} />
                <Link
                  to={{
                    pathname: "https://adelin-marin-portfolio.netlify.app",
                  }}
                  target="_blank"
                >
                  <span>Portfolio</span>
                </Link>
              </p>

              <p className="phone">
                <img src={iconsList.phone} alt="phone" />
                <span>{personlInfo.phone}</span>
              </p>
              <p className="address">
                <img src={iconsList.address} alt="address" />
                <span>{personlInfo.address}</span>
              </p>
              <p className="email">
                <img src={iconsList.email} alt="email" />
                <span>{personlInfo.email}</span>
              </p>
            </div>
            <div className="wrapper-photo">
              <img className="photo" src={personlInfo.photo} />
            </div>
          </div>
        </div>
        <hr style={{ height: "1px" }} />
        <div className="wrapper-developer-experince">
          <div className="wrapper-label-developer-experince">
            <label>Developer Experince </label>
            <span>
              {/* 
              <Link
                to={{ pathname: "/projects" }}
                style={{
                  textDecoration: "none ",
                  fontWeight: "bolder",
                  color: "black",
                }}
              >
                PROJECTS
              </Link>{" "}
              tab */}
            </span>
          </div>
          <div className="card-developer-experince">
            {projects.map((project, index) => {
              return (
                <div
                  className="wrapper-developer-experince-project"
                  key={index}
                >
                  <p className="project-title">{project.title}</p>
                  <p className="project-description">{project.description}</p>
                  <hr style={{ height: "1px", color: "black" }} />
                </div>
              );
            })}
          </div>
        </div>
        <hr style={{ height: "1px" }} />
        {/* <div className="wrapper-work-experince">
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
        </div> */}
        {/*  <hr style={{ height: "1px" }} />
        <div className="wrapper-education">
          <label>Education</label>
          <div className="card-education">
            {schools.map((school, index) => {
              return (
                <div style={inlineStyle_wrapper} key={index}>
                  <p className="school-profile">{school.profile}</p>
                  <p className="school-name">{school.name}</p>
                  <p className="school-from-to">{school.from_to}</p>
                  <hr style={{ height: "1px", color: "black" }} />
                </div>
              );
            })}
          </div>
        </div> */}
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
                    <li> .Git </li>
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
                    {language.language} {`- ${language.nivel}`}
                  </p>
                  <p className="language">English courses - present</p>
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
