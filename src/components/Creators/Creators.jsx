import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Creators.css";

const Creators = () => {
  const data = [
    {
      title: "How to plan your retirement with crypto?",
      imgUrl:
        "https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
    },
    {
      title: "Why are there limited Bitcoin?",
      imgUrl:
        "https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
    },
    {
      title: "How does Uniswap actually work?",
      imgUrl:
        "https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
    },
    {
      title: "How to spot crypto projects to invest in?",
      imgUrl:
        "https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
    },
  ];
  return (
    <div className="creators">
      <h3 className="creators-h3">
        Top Crypto Creators and Projects to Follow
      </h3>
      <p className="creators-p">
        Answers to your crypto doubts, straight from the experts
      </p>
      <div className="creators-card-wrapper">
        {data &&
          data.map((item) => (
            <ProjectCard bg={item.imgUrl} title={item.title} />
          ))}
      </div>
    </div>
  );
};

export default Creators;
