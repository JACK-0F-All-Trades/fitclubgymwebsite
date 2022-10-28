import React from "react";
import Stats from "../Main/Stats";
import BtnGroup from "../Main/BtnGroup";
import TagLine from "../Main/TagLine";
import Header from "../Header/Header";
import Ad from "../Ad/Ad";

const LeftHero = () => {
  const headerItems = [
    { id: 1, name: "Home" },
    {
      id: 2,
      name: "Programs",
    },
    {
      id: 3,
      name: "Why Us",
    },
    {
      id: 4,
      name: "Plans",
    },
    {
      id: 5,
      name: "testimonials",
    },
  ];
  const adLine = "The Best Fitness Club In the Town";
  return (
    <div className="left-hero">
      {/* We will make the header component usefull by passing in the list of items to be displayed */}
      <Header items={headerItems} />
      <Ad adLine={adLine} />
      <div className="main">
        <span className="main-text stroke-text ">Shape</span>
        <span className="main-text"> Your</span>
        <div>
          <span className="main-text">Ideal Body</span>
        </div>

        <TagLine />

        <Stats />

        <BtnGroup />
      </div>
    </div>
  );
};

export default LeftHero;
