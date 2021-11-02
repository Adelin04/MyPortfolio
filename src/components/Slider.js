import React from "react";
import NavBar from "../components/NavBar";

//Style
import "./Slider.css";

const links = [
  { link: "About", to: "/about" },
  { link: "Projects", to: "/projects" },
];

const Slider = () => {
  return (
    <div className="slider">
      <NavBar links={links} />
    </div>
  );
};

export default Slider;
