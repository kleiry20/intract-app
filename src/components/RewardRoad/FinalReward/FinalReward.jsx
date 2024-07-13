import React from "react";
import "./FinalReward.css";
import { LuTimer } from "react-icons/lu";
import timerBg from "../../../assets/timerBg.png";
import { FaDiscord } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import RewardArrow from "../../../assets/reward-arrow.svg";
import { BsInfoCircle } from "react-icons/bs";

import rewardGif from "../../../assets/reward-gif.gif";

const FinalReward = () => {
  return (
    <div className="final-reward">
      <div className="reward-unlocks">
        <div className="rewards-row">
          <LuTimer style={{ color: "#98581F" }} />
          <p className="reward-unlocks-p">Reward unlocks in</p>
        </div>
        <hr className="rewards-hr" />
        <div className="rewards-timer">
          <div className="rewards-time-row">
            <h3 className="rewards-timer-value">00</h3>
            <p className="rewards-timer-unit">Days</p>
          </div>
          <div className="rewards-time-row">
            <h3 className="rewards-timer-value">00</h3>
            <p className="rewards-timer-unit">Hrs</p>
          </div>
          <div className="rewards-time-row">
            <h3 className="rewards-timer-value">00</h3>
            <p className="rewards-timer-unit">Mins</p>
          </div>
          <div className="rewards-time-row">
            <h3 className="rewards-timer-value">00</h3>
            <p className="rewards-timer-unit">Sec</p>
          </div>
        </div>
      </div>
      <div className="reward-div-2">
        <img className="reward-gif" src={rewardGif} alt="" />
        <div className="lucky-draw">Lucky Draw</div>
        <div className="row-1">
          <p>Exclusive Community</p>
          <div className="earndrop-div">
            <div className="earndrop-icon">
              <FaDiscord style={{ fontSize: "10px" }} />
            </div>
            <p>Earndrop</p>
          </div>
        </div>
        <hr className="app-hr" style={{ marginBottom: "12px" }} />
        <div className="row-2">
          <p>Complete all Essential quests</p>
          <div className="reward-checkbox">
            <FaCheck style={{ fontSize: "12px", color: "#4F4F4F" }} />
          </div>
        </div>
        <div className="row-2">
          <p>Complete at least 1 Alpha Hub quest today</p>
          <div className="reward-checkbox">
            <FaCheck style={{ fontSize: "12px", color: "#4F4F4F" }} />
          </div>
        </div>
        <button className="reward-claim-btn">
          Claim Now&nbsp;
          <GoArrowRight />
        </button>
      </div>

      <img className="reward-arrow" src={RewardArrow} alt="" />

      <div className="reward-info">
        <div className="reward-info-title-div">
          <p className="reward-info-title">Reward Info</p>
          <BsInfoCircle />
        </div>
        <div className="reward-info-body">
          <p style={{ color: "#D0D0D0" }}>
            Free access to paid KOL (crypto earning) communities!
          </p>
          <br />
          <p style={{ color: "#7D7D7D" }}>
            Win access to exclusive earning communities of some of the the
            greatest earners in crypto for a month, every 24 hours. Get access
            to unmatched insights, a close-knit community of the best airdrop
            earners, and more.
          </p>
          <br />
          <p style={{ color: "#7D7D7D" }}>
            To win: make sure you've connected your Twitter and Discord accounts
            - and follow our criteria!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinalReward;
