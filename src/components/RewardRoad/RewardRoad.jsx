import React from "react";
import "./RewardRoad.css";
import CoverCard from "../CoverCard/CoverCard";
import Road1 from "../../assets/road1.svg";
import Road2 from "../../assets/road2.svg";
import Road3 from "../../assets/road3.svg";
import Road4 from "../../assets/road4.svg";
import Road5 from "../../assets/road5.svg";

import { Course1 } from "../../data/courses";
import { Course2 } from "../../data/courses";
import { course1Topics } from "../../data/courses";
import NFTCard from "../NFTCard/NFTCard";
import { NFT1 } from "../../data/nft";
import { NFT2 } from "../../data/nft";
import FinalReward from "./FinalReward/FinalReward";

const RewardRoad = () => {
  return (
    <section className="reward-road">
      <img className="road1" src={Road1} alt="" />
      <div>
        <CoverCard courseDetails={Course1} courseTopics={course1Topics} />
        <img className="road2" src={Road2} alt="" />
        <div className="nft1">
          <NFTCard imgUrl={NFT1.imgUrl} />
        </div>

        <img className="road3" src={Road3} />
        <div className="course2">
          <CoverCard courseDetails={Course2} courseTopics={course1Topics} />
        </div>
        <img className="road4" src={Road4} />
        <div className="nft2">
          <NFTCard imgUrl={NFT2.imgUrl} />
        </div>
        <img className="road5" src={Road5} alt="" />
      </div>

      <div className="rewards-div">
        <FinalReward />
      </div>
    </section>
  );
};

export default RewardRoad;
