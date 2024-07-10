import React from "react";
import Hero from "../../components/Hero/Hero";
import CryptoDictionary from "../../components/CryptoDictionary/CryptoDictionary";
import "./Academy.css";
import Creators from "../../components/Creators/Creators";
import RewardRoad from "../../components/RewardRoad/RewardRoad";

const Academy = () => {
  return (
    <div className="academy">
      <Hero />
      <RewardRoad />
      <Creators />
      <CryptoDictionary />
    </div>
  );
};

export default Academy;
