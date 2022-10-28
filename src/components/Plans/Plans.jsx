import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import Tick from "../../assets/whiteTick.png";
const Plans = () => {
  return (
    <div className="plans" id="Plans">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>

      <div className="headline">
        <span className="stroke-text">READY TO START </span>
        <span style={{ color: "white" }}>YOUR JOURNEY </span>
        <span className="stroke-text">WITH US</span>
      </div>

      <div className="plan-cards">
        {plansData.map((plan, i) => {
          return (
            <div key={i} className="plan-card">
              <div className="card-icon">{plan.icon}</div>
              <div key={i} className="card-details">
                <h4>{plan.name}</h4>
                <h2 className="orange-color">$ {plan.price}</h2>
                {plan.features.map((feature, i) => {
                  return (
                    <div key={i} className="feature">
                      <span>
                        <img src={Tick} alt="" />
                      </span>
                      <span>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <button className="plan-btn">Join Now</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Plans;
