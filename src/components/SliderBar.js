import React from "react";
import NavBar from "./NavBar";

//Style
import "./SliderBar.css";

const links = [
  { link: "About", to: "/" },
  // { link: "Skills", to: "/skills" },
  { link: "Projects", to: "/projects" }
];

const SliderBar = () => {
  return (
    <div className="slider">
      <NavBar links={links} />
    </div>
  );
};

export default SliderBar;
