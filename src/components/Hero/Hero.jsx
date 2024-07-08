import React from "react";
import "./Hero.css";
import AnimatedLogo from "../../assets/animated-logo.gif";
import { GoArrowRight } from "react-icons/go";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <img src={AnimatedLogo} alt="animated-logo" />

        <p style={{ marginTop: "1rem" }}>
          <span>Intract users</span> have together made more than{" "}
          <span> $100 million</span> in web3.
        </p>
        <p style={{ marginBottom: "2.8rem" }}>
          Join them and <span>learn how to earn crypto!</span>
        </p>

        <button className="hero-btn">
          Get Started &nbsp; <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
