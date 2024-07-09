import React from "react";
import Hero from "../../components/Hero/Hero";
import CryptoDictionary from "../../components/CryptoDictionary/CryptoDictionary";
import "./Academy.css";
import Creators from "../../components/Creators/Creators";

const Academy = () => {
  return (
    <div className="academy">
      <Hero />
      <Creators />
      <CryptoDictionary />
    </div>
  );
};

export default Academy;
