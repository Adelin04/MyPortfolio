import React from "react";

//Style
import "./Skills_Template.css";

const Skills_Template = ({ Languages, Frameworks, Tools, DataBases }) => {
  return (
    <div className="skills-container">
      {/* {console.log("skill", skills)} */}

      <p className="languages">Languages</p>
      <div className="wrapper-skills">
        {Languages.map((language, index) => {
          return (
            <div className="skill" key={index}>
              <img className="skill-photo" src={language.img} alt="css" />
              <p className="skill-name">{language.name}</p>
            </div>
          );
        })}
      </div>

      <p className="frameworks">Frameworks</p>
      <div className="wrapper-skills">
        {Frameworks.map((framework, index) => {
          return (
            <div className="skill" key={index}>
              <img className="skill-photo" src={framework.img} alt="css" />
              <p className="skill-name">{framework.name}</p>
            </div>
          );
        })}
      </div>

      <p className="tools">Tools</p>
      <div className="wrapper-skills">
        {Tools.map((tools, index) => {
          return (
            <div className="skill" key={index}>
              <img className="skill-photo" src={tools.img} alt="css" />
              <p className="skill-name">{tools.name}</p>
            </div>
          );
        })}
      </div>

      <p className="dataBases">DataBases</p>
      <div className="wrapper-skills">
        {DataBases.map((dataBases, index) => {
          return (
            <div className="skill" key={index}>
              <img className="skill-photo" src={dataBases.img} alt="css" />
              <p className="skill-name">{dataBases.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills_Template;
