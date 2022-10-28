import React from "react";
import { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import rightArrow from "../../assets/rightArrow.png";
import leftArrow from "../../assets/leftArrow.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [selected, setSelected] = useState(0);

  const handleLeftClick = (prev) => {
    if (prev === 0) {
      return setSelected(testimonialsData.length - 1);
    }
    setSelected((prev) => prev - 1);
  };

  const handleRightClick = (prev) => {
    if (prev === testimonialsData.length - 1) {
      return setSelected(0);
    }
    setSelected((prev) => prev + 1);
  };
  return (
    <div className="Testimonials" id="testimonials">
      <div className="t-left">
        <h4 style={{ color: "var(--orange)" }}>Testimonials</h4>
        <span
          className="stroke-text"
          style={{ fontSize: "2rem", fontWeight: "bold" }}
        >
          WHAT THEY
        </span>
        <span style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}>
          SAY ABOUT US
        </span>
        <motion.span
          key={selected}
          style={{ color: "white" }}
          className="review"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2 }}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <div>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>
          <span style={{ color: "white" }}>
            {" "}
            - {testimonialsData[selected].status}
          </span>
        </div>
      </div>
      <div className="t-right">
        <motion.div
          initial={{ right: "14rem" }}
          whileInView={{ right: "11rem" }}
          transition={{ type: "spring", duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ right: "6rem" }}
          whileInView={{ right: "9rem" }}
          transition={{ type: "spring", duration: 2 }}
        ></motion.div>
        <div className="p-image">
          <img src={testimonialsData[selected].image} alt="image" />
        </div>
        <div className="arrows">
          <img
            src={rightArrow}
            alt=""
            onClick={() => handleRightClick(selected)}
          />
        </div>

        <div className="left-arrow">
          <img
            src={leftArrow}
            alt=""
            onClick={() => handleLeftClick(selected)}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
