import React from "react";
import Links from "./Links";

//Style
import "./Slider.css";

const links = [
  {
    url: "About"
  }
];
const Slider = () => {
  return (
    <div className="slider">
      <Links links={links.url} />
    </div>
  );
};

export default Slider;
