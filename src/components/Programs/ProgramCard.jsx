import React from "react";
import RightArrow from "../../assets/rightArrow.png";
import "./ProgramCard.css";

// inputs for program card

const ProgramCard = ({ cardImage, cardTitle, cardDescription }) => {
  return (
    <div className="card">
      <img src={cardImage} alt="" />
      <h4>{cardTitle}</h4>
      <p>{cardDescription}</p>
      <div>
        <button>Join Now </button>
        <span>
          <img src={RightArrow} alt="" />
        </span>
      </div>
    </div>
  );
};

export default ProgramCard;
