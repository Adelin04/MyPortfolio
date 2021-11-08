import React from "react";

//Style
import "./Skills_Template.css";

const Skills_Template = ({ skills }) => {
  return (
    <div className="skills-container">
      {console.log('skill',skills)}
      {skills.map((skill, index) => {
        return (
          <div className="skill" key={index}>
            <img className="skill-photo" src={skill.img} alt="css" />
            <p className="skill-name">
              {skill.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills_Template;
