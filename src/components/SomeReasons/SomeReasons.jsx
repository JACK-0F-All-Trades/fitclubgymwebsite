import React from "react";
import "./SomeReasons.css";
import Tick from "../../assets/tick.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import linkedin from "../../assets/linkedin.png";

const SomeReasons = () => {
  return (
    <div className="someReasons">
      <div>
        <p>Some Reasons</p>
        <span className="stroke-text" style={{ fontSize: "3rem" }}>
          Why{" "}
        </span>
        <span style={{ color: "white", fontSize: "3rem" }}>Choose Us</span>
      </div>

      <div className="reasonDetails">
        <div>
          <img src={Tick} alt="" />
          <span className="r">Over 140+ expert coaches</span>
        </div>
        <div>
          <img src={Tick} alt="" />
          <span className="r">Train Faster and Smarter than before</span>
        </div>
        <div>
          <img src={Tick} alt="" />
          <span className="r">Best Packages</span>
        </div>
        <div>
          <img src={Tick} alt="" />
          <span className="r">Reliable Partners</span>
        </div>
      </div>

      <div className="partners">
        <h3 style={{ color: "gray" }}>Our Partners</h3>
        <span>
          <img src={nb} alt="" />
        </span>
        <span>
          <img src={nike} alt="" />
        </span>
        <span>
          <img src={linkedin} alt="" />
        </span>
      </div>
    </div>
  );
};

export default SomeReasons;
