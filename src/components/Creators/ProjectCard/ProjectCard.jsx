import React from "react";
import "./ProjectCard.css";
import ReelSvg from "../../../assets/reel.svg";

const ProjectCard = ({ bg, title }) => {
  return (
    <div className="projectCard" style={{ backgroundImage: `url(${bg})` }}>
      <div className="reel-div-wrapper">
        <div className="reel-div">
          <img src={ReelSvg} alt="" />
        </div>
      </div>
      {/* <div className="play">play</div> */}
      <h3 className="project-card-title">{title}</h3>
    </div>
  );
};

export default ProjectCard;
