import React from "react";
import "./Ad.css";
import { motion } from "framer-motion";

const Ad = ({ adLine }) => {
  const transition = {
    type: "tween",
    duration: 3,
  };
  return (
    <div className="adMain">
      <motion.div
        className="slider"
        initial={{ left: "200px" }}
        whileInView={{ left: "4px" }}
        transition={transition}
      ></motion.div>
      <span>{adLine}</span>
    </div>
  );
};

export default Ad;
