import React from "react";
import "./RewardRoad.css";
import ListCard from "../ListCard/ListCard";
import CoverCard from "../CoverCard/CoverCard";
import Road1 from "../../assets/road1.svg";
import Road2 from "../../assets/road2.svg";

import { Course1 } from "../../data/courses";
import { Course2 } from "../../data/courses";
import { course1Topics } from "../../data/courses";

const RewardRoad = () => {
  return (
    <section className="reward-road">
      <img src={Road1} alt="" />
      <div>
        <CoverCard courseDetails={Course1} courseTopics={course1Topics} />
        <img className="road2" src={Road2} alt="" />
      </div>
      <br />
      <div>
        <CoverCard courseDetails={Course2} courseTopics={course1Topics} />
      </div>
      <br />
      <div>final reward</div>
    </section>
  );
};

export default RewardRoad;
