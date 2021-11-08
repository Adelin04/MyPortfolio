import React from "react";
import Skills_Template from "../Skills_Template";

//Style
import "./Skills.css";

// Skills Icons
import htmlIcon from "../icons/html.svg";
import cssIcon from "../icons/css.svg";
import reactIcon from "../icons/react.svg";
import jsIcon from "../icons/javascript.svg";
import pythonIcon from "../icons/python.svg";
import gitIcon from "../icons/git.svg";
import csharpIcon from "../icons/csharp.svg";
import cIcon from "../icons/c.svg";
import javaIcon from "../icons/java.svg";
import flaskIcon from "../icons/flask.svg";
import springIcon from "../icons/spring.svg";
import mysqlIcon from "../icons/mysql.svg";

// Social Icon
// import githubIcon from "./icons/github.svg";

const skills = [
  {
    img: jsIcon,
    name: "Java Script"
  },
  {
    img: reactIcon,
    name: "React"
  },
  {
    img: javaIcon,
    name: "Java"
  },
  {
    img: springIcon,
    name: "Spring Boot"
  },
  {
    img: pythonIcon,
    name: "Python"
  },
  {
    img: flaskIcon,
    name: "Flask"
  },
  {
    img: csharpIcon,
    name: "C#"
  },
  {
    img: cIcon,
    name: "C++"
  },
  {
    img: mysqlIcon,
    name: "MySql"
  },
  {
    img: htmlIcon,
    name: "HTML"
  },
  {
    img: cssIcon,
    name: "CSS"
  },
  {
    img: gitIcon,
    name: ".Git"
  }
];

const Skills = () => {
  return (
    <div className="skills">
      {/* {skills.map(skill => {
        return <Skills_Template skills={skill} />;
      })} */}
      <Skills_Template skills={skills} />
    </div>
  );
};

export default Skills;
