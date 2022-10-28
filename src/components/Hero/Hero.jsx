import React from "react";

import "./Hero.css";
import LeftHero from "./LeftHero";

import RightHero from "./RightHero";
const Hero = () => {
  return (
    <div className="container" id="Home">
      <div className="blur hero-blur"></div>
      <LeftHero />
      {/* roght component */}
      <RightHero />
    </div>
  );
};

export default Hero;
