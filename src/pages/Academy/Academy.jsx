import React from "react";
import Hero from "../../components/Hero/Hero";
import CryptoDictionary from "../../components/CryptoDictionary/CryptoDictionary";
import "./Academy.css";

const Academy = () => {
  return (
    <div className="academy">
      <Hero />
      <CryptoDictionary />
    </div>
  );
};

export default Academy;
