import React from "react";
import NumberCounter from "number-counter";

const Stats = () => {
  return (
    <div className="stats">
      <div>
        <span className="statsCount">
          <NumberCounter
            start={10}
            end={159}
            preFix="+"
            delay={5}
          ></NumberCounter>
        </span>
        <span className="statsDescription">Expert Coaches</span>
      </div>
      <div>
        <span className="statsCount">
          <NumberCounter
            start={1000}
            end={1467}
            preFix="+"
            delay={4}
          ></NumberCounter>
        </span>
        <span className="statsDescription">Members Joined</span>
      </div>
      <div>
        <span className="statsCount">
          <NumberCounter
            start={100}
            end={211}
            preFix="+"
            delay={5}
          ></NumberCounter>
        </span>
        <span className="statsDescription">Fitness Programs</span>
      </div>
    </div>
  );
};

export default Stats;
