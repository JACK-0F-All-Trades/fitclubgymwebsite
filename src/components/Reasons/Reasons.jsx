import React from "react";
import Gallery from "../Gallery/Gallery";
import SomeReasons from "../SomeReasons/SomeReasons";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import "./Reasons.css";

const Reasons = () => {
  return (
    <div className="reasons" id="Why Us">
      <div className="left-r">
        <Gallery img1={img1} img2={img2} img3={img3} img4={img4} />
      </div>

      <div className="right-r">
        <SomeReasons />
      </div>
    </div>
  );
};

export default Reasons;
