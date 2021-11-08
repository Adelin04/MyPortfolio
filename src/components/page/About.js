import React from "react";
import About_Template from "../About_Template";
import phoneIcon from "../icons/phone.svg";
import emailIcon from "../icons/email.svg";
import addressIcon from "../icons/address.svg";

//Style
import "./About.css";

const iconsList = {
  phone: phoneIcon,
  email: emailIcon,
  address: addressIcon
};
const personalInfo = {
  email: "adelin.marin04@yahoo.com",
  phone: "0774617663",
  address: "Pitest, Romania",
  github: "https://github.com/Adelin04",
  linkedin: "https://www.linkedin.com/in/adelin-marin-5b1a881b8/",
  photo: "../Adelin.jpg"
};
const About = () => {
  return (
    <div className="about">
      <About_Template personlInfo={personalInfo} iconsList={iconsList} />
    </div>
  );
};

export default About;
