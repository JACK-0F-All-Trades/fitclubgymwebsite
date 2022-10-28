import React from "react";
import hero_image from "../../assets/hero_image.png";
import heart from "../../assets/heart.png";
import hero_image_back from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";

const RightHero = () => {
  return (
    <div className="right-hero">
      <div className="joinNowDiv">
        <button className="joinNow">Join Now</button>
      </div>

      <motion.div
        className="heartRate"
        initial={{ left: "60%" }}
        whileInView={{ left: "30%" }}
        transition={{ type: "spring", duration: 3 }}
      >
        <img src={heart} alt="heart" />
        <div>
          <span>Heart Rate</span>
          <br />
          <span>120 bpm</span>
        </div>
      </motion.div>

      <div className="hero">
        <img src={hero_image} alt="hero" />
        <motion.img
          src={hero_image_back}
          alt="flames"
          initial={{ left: "-35%" }}
          whileInView={{ left: "-65%" }}
          transition={{ type: "spring", duration: 3 }}
        />
      </div>
    </div>
  );
};

export default RightHero;
