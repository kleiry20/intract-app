import React from "react";
import "./CoverCard.css";
import CoinImg from "../../assets/coin.svg";
import { FaCheck } from "react-icons/fa6";

const CoverCard = ({ courseDetails, courseTopics }) => {
  return (
    <div className="cover-card">
      <details open>
        <summary className="cover-card-header">
          <div className="cover-card-img-wrapper">
            <img
              src={courseDetails.courseImg}
              className="cover-card-img"
              alt="cover card img"
              width={12}
              height={12}
            />
          </div>
          <div className="cover-card-details">
            <h3 className="cover-card-h3">{courseDetails.courseTitle}</h3>
            <p className="cover-card-p">{courseDetails.courseDesc}</p>
            <hr className="cover-card-hr" />
            <div className="cover-card-coins">
              <img src={CoinImg} alt="coin" width={18} height={16} />
              <p className="cover-card-xp">{courseDetails.courseXP}</p>
            </div>
          </div>
        </summary>
        <div className="cover-card-body">
          {courseTopics &&
            courseTopics.map((task) => (
              <div className="cover-card-item">
                <div className="cover-card-item-img-wrapper">
                  <img
                    className="cover-card-item-img"
                    src={task.taskImg}
                    alt=""
                  />
                </div>
                <div className="cover-card-mid">
                  <p className="cover-card-title">{task.title}</p>
                  <hr className="cover-card-hr" />
                  <div className="progress-tracker">
                    <label style={{ color: "#A2A2A2" }}>{task.tasks}</label>
                    <div className="progress-wrapper">
                      <div className="progress"></div>
                    </div>
                  </div>
                </div>

                <div className="checkbox">
                  <FaCheck style={{ fontSize: "12px", color: "#4F4F4F" }} />
                </div>
              </div>
            ))}
        </div>
      </details>
    </div>
  );
};

export default CoverCard;
