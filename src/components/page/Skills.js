/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Skills_Template from "../Skills_Template";

//Style
import "./Skills.css";

// Skills Icons
import htmlIcon from "../icons/html.png";
import mongodbIcon from "../icons/mongodb.ico";
import cssIcon from "../icons/css.svg";
import reactIcon from "../icons/reactjs.png";
import jsIcon from "../icons/javascript.svg";
import pythonIcon from "../icons/python.svg";
import gitIcon from "../icons/git.png";
import csharpIcon from "../icons/csharp.svg";
import cIcon from "../icons/c.svg";
import javaIcon from "../icons/java.svg";
import flaskIcon from "../icons/flask.svg";
import springIcon from "../icons/spring.svg";
import mysqlIcon from "../icons/mysql.svg";
import cucumberIcon from "../icons/cucumber.svg";
import seleniumIcon from "../icons/selenium.svg";
import postgresqlIcon from "../icons/postgresql.svg";
import nodeIcon from "../icons/nodejs.svg";
import netIcon from "../icons/NET_Core_Logo.png";

// Social Icon
// import githubIcon from "./icons/github.svg";

const Languages = [
  {
    img: jsIcon,
    name: "Java Script",
  },
  {
    img: csharpIcon,
    name: "C#",
  },
  {
    img: pythonIcon,
    name: "Python",
  },
  {
    img: htmlIcon,
    name: "HTML",
  },
  {
    img: cssIcon,
    name: "CSS",
  },
];

const Framework = [
  {
    img: reactIcon,
    name: "React",
  },
  {
    img: netIcon,
    name: ".NET",
  },
  {
    img: nodeIcon,
    name: "Node",
  },
  {
    img: flaskIcon,
    name: "Flask",
  },
];

const Tools = [
  {
    img: gitIcon,
    name: ".Git",
  },
  {
    img: cucumberIcon,
    name: "Cucumber",
  },
  {
    img: seleniumIcon,
    name: "Selenium",
  },
];

const DataBases = [
  {
    img: mysqlIcon,
    name: "MySql",
  },
  {
    img: postgresqlIcon,
    name: "Postgresql",
  },
  {
    img: mongodbIcon,
    name: "MongoDB",
  },
];

const Skills = () => {
  return (
    <div className="skills">
      <Skills_Template
        Languages={Languages}
        Frameworks={Framework}
        Tools={Tools}
        DataBases={DataBases}
      />
    </div>
  );
};

export default Skills;
