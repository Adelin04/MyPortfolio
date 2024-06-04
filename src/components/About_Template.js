import React from "react";
import InputEmoji from "react-input-emoji";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import { CV_decoded } from "../components/base64_decoded";
import saveIcon from "./icons/save-icon.png";
import portfolioIcon from "./icons/portfolio.svg";
import binary_tree_right from "./icons/binary_tree_right.png";
import binary_tree_up from "./icons/binary_tree_up.png";
//Style
import "./About_Template.css";
import Skills_Template from "./Skills_Template";
import Skills from "./page/Skills";

const CV_MARIN_ADELIN_MARIUS = CV_decoded;
// const img = new Image();
// img.onload = () => {
// };

const doc = new jsPDF("p", "px", "letter");
doc.addImage(CV_MARIN_ADELIN_MARIUS, "PNG" || "png", 0, 0, 459, 600);

//  LINKS INFO
doc.setTextColor("#FFFFFF");
doc.textWithLink("____________________", 27, 190, {
  url: "https://github.com/Adelin04",
});
doc.textWithLink("____________________", 27, 207, {
  url: "https://adelin-marin-portfolio.netlify.app",
});
doc.textWithLink("____________________", 27, 232, {
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
            <title>Hello,I'm Adelin Marin 🖐 </title>
            <h2>Full Stack Web Developer</h2>
            <h2>3D Artist</h2>
          </div>

          <div className="wrapper-card-personalInfo">

            <div className="separator">

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
                <img className="photo" src={personlInfo.photo} alt="PersonalPhoto" />
              </div>

            </div>

            <div className="aboutMe">
              <span style={{ display: 'contents', color: 'transparent' }}>{"---------"}</span> I am an ambitious,serious and dedicated person in everything I do.At the moment I work as a 3D artist for a jewelry company.
              I am passionate about everything related to IT, especially programming. It started as a simple curiosity which developed into a strong drive to learn as much as I can about this wonderful and complicated industry.
              My goal is to find a web developer job and a team to share the same passion with, to learn from as much as possible about this field.
              After some programming courses I took, I realized that I like both the frontend and the backend.
              The programming languages and frameworks I worked with the longest and that I used to build several demonstrative <Link style={{ display: 'contents', color: 'white' }} to={'/projects'}>Projects</Link> are:
              <br /><span style={{ display: 'contents', color: 'transparent' }}>{"---"}</span>-C# - ASP.NET Core
              <br /><span style={{ display: 'contents', color: 'transparent' }}>{"---"}</span>-JavaScript - Node.js, React.js, Redux, Zustand
              <br /><span style={{ display: 'contents', color: 'transparent' }}>{"---"}</span>-Mostly I used MySql ,PstgreSql and MongoDB for database
              <br /><span style={{ display: 'contents', color: 'transparent' }}>{"---"}</span>-.Git, GitHub, Heroku, AWS S3, Nginx.
              <br /><span style={{ display: 'contents', color: 'transparent' }}>{"---"}</span>-I also have knowledge of other programming languages and tools.
            </div>


          </div>


        </div>

        {/* <hr style={{ height: "1px" }} /> */}
        {/*  <div className="wrapper-developer-experince">
          <div className="wrapper-label-developer-experince">
            <label>Developer Experince </label>
            <span>
                            
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
                  <p className="project-title">{project.title}</p>
                  <p className="project-description">{project.description}</p>
                  <hr style={{ height: "1px", color: "black" }} />
                </div>
              );
            })}
          </div>
        </div> */}
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
        {/* <hr style={{ height: "1px" }} /> */}
        <div className="wrapper-certifications">
          <label>Certifications</label>
          <div className="card-certifications">
            {certifications.map((certification, index) => {
              return (
                <div style={inlineStyle_wrapper} key={index}>
                  <p className="certification">
                    {certification.name} {`${certification.certification}`}
                  </p>
                  <br />

                  <div className="modules-card">

                    {/* <svg className="tree-icon" style={{ width: "70px", height: '100px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M176 152h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H88V80h8a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v112a24 24 0 0 0 24 24h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96a8 8 0 0 1-8-8v-64h72v8a16 16 0 0 0 16 16M64 32h32v32H64Zm112 160h32v32h-32Zm0-88h32v32h-32Z" /></svg>
                    <svg className="tree-icon" style={{ width: "70px", height: '100px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M176 152h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H88V80h8a16 16 0 0 0 16-16V32a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h8v112a24 24 0 0 0 24 24h64v8a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v8H96a8 8 0 0 1-8-8v-64h72v8a16 16 0 0 0 16 16M64 32h32v32H64Zm112 160h32v32h-32Zm0-88h32v32h-32Z" /></svg> */}

                    <div className="wrapper-modules">

                      <div className="module-1">

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: 'auto' }}>
                              <img style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '120px' }} src={binary_tree_right} alt="binary_tree" />
                            </div>
                            <p>{"Module 1"} </p>
                            <ul style={{ flexWrap: "wrap" }}>
                              <li> Fundamentals of programming C/C++ Algorithms </li>
                            </ul>
                          </div>
                        </div>

                      </div>

                      <div className="module-2">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: 'auto' }}>
                          <img style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '120px' }} src={binary_tree_right} alt="binary_tree" />
                        </div>
                        <p>{"Module 2"} </p>
                        <ul style={{ flexWrap: "wrap" }}>
                          <li> C# - OOP </li>
                        </ul>
                      </div>

                      <div className="module-3">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: 'auto' }}>
                          <img style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '120px' }} src={binary_tree_right} alt="binary_tree" />
                        </div>
                        <p>{"Module 3"}</p>
                        <ul style={{ flexWrap: "wrap" }}>
                          <li> Python </li>
                          <li> Flask</li>
                          <li> Java Script </li>
                          <li> React Js</li>
                        </ul>
                      </div>

                      <div className="module-4">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: 'auto' }}>
                          <img style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '120px' }} src={binary_tree_right} alt="binary_tree" />
                        </div>
                        <p>{"Module 4"}</p>
                        <ul style={{ flexWrap: "wrap" }}>
                          <li> Java </li>
                          <li> Spring Boot</li>
                          <li> Maven </li>
                          <li> Hibernate </li>
                          <li> MySQL</li>
                          <li>Cucumber</li>
                          <li> Selenium </li>
                          <li> .Git </li>
                        </ul>
                      </div>

                    </div>

                  </div>
                  {/* <hr style={{ height: "1px", color: "black" }} /> */}
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
                <div className="wrapper-language" key={index}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: 'auto' }}>
                    <img style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '120px' }} src={binary_tree_right} alt="binary_tree" />
                  </div>
                  <ul style={{ flexWrap: "wrap" }}>
                    <li className="language">
                      {language.language} {`- ${language.nivel}`}
                    </li>
                  </ul>
                  {/* <p className="language">English courses - present</p> */}
                  {/* <hr style={{ height: "1px", color: "black" }} /> */}
                </div>
              );
            })}
          </div>
        </div>
        <hr style={{ height: "1px" }} />

        <Skills />

      </div>
    </div >
  );
};

export default About_Template;
