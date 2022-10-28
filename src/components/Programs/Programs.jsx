import React from "react";
import { programsData } from "../../data/programsData";
import ProgramCard from "./ProgramCard";
import "./Programs.css";

const Programs = () => {
  return (
    <div className="programs" id="Programs">
      <div>
        <span className="stroke-text">Explore</span>
        <span className="special">Our Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>

      <ul className="programs-ul">
        {programsData.map((plan) => {
          return (
            <li key={plan.heading}>
              <ProgramCard
                cardImage={plan.image}
                cardTitle={plan.heading}
                cardDescription={plan.details}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Programs;
