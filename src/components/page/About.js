import React from "react";
import About_Template from "../About_Template";

import phoneIcon from "../icons/phone.svg";
import emailIcon from "../icons/email.svg";
import addressIcon from "../icons/address.svg";
import linkedinIcon from "../icons/linkedin.svg";
import githubIcon from "../icons/github2.svg";

//Style
import "./About.css";

const personalInfo = {
  email: "adelin.marin04@yahoo.com",
  phone: "0774617663",
  address: "Pitesti, Romania",
  github: "https://github.com/Adelin04",
  linkedin: "https://www.linkedin.com/in/adelin-marin-5b1a881b8/",
  photo: "../Adelin.jpg",
};

const iconsList = {
  phone: phoneIcon,
  email: emailIcon,
  address: addressIcon,
  linkedin: linkedinIcon,
  github: githubIcon,
};

const experince = [
  {
    title: "TEILOR",
    position: "Fotograf (bijuterii)",
    from_to: "2019 - curent | Pitesti",
  },
  {
    title: "",
    position: "Specialist Achizitii",
    from_to: "Martie 2015 - Decembrie 2019 | Pitesti",
  },
  {
    title: "NEW YORKER",
    position: "Responsabil Departament",
    from_to: "Iulie 2011 - Februarie 2015 | Pitesti",
  },
  {
    title: "FOX",
    position: "Casier",
    from_to: "Iunie 2008 - Iulie 2011 | Pitesti",
  },
  {
    title: "BETTY ICE",
    position: "Casier",
    from_to: "Mai 2006 - Septembrie 2006 | Bucuresti",
  },
  {
    title: "BETTY ICE",
    position: "Casier",
    from_to: "Mai 2006 - Septembrie 2006 | Bucuresti",
  },
  {
    title: "BETTY ICE",
    position: "Casier",
    from_to: "Mai 2006 - Septembrie 2006 | Bucuresti",
  },
];

const schools = [
  {
    profile: "Tehnician,Electromecanica",
    name: 'Liceul ICM "DACIA" ',
    from_to: "2004-2009 | Pitesti",
  },
];

const languages = [{ language: "English", nivel: "Limited Work" }];

const certifications = [
  { name: "Acedemia Te Fac Programator", certification: "" },
];

const About = () => {
  return (
    <div className="about">
      <About_Template
        personlInfo={personalInfo}
        iconsList={iconsList}
        experince={experince}
        schools={schools}
        languages={languages}
        certifications={certifications}
      />
    </div>
  );
};

export default About;
