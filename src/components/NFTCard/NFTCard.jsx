import React from "react";
import "./NFTCard.css";
import { FaCheck } from "react-icons/fa6";
import { PiLockFill } from "react-icons/pi";

const NFTCard = ({ imgUrl }) => {
  return (
    <div className="nft-card-wrapper">
      <div className="nft-card">
        <div className="nft-checkbox">
          <FaCheck
            style={{ fontSize: "20px", fontWeight: "200", color: "#4F4F4F" }}
          />
        </div>
        <div className="nft-img-wrapper">
          <img className="nft-img" src={imgUrl} alt="" />
        </div>
        <div className="nft-img-lock">
          <PiLockFill style={{ color: "#A1A1A1", fontSize: "20px" }} />
        </div>
        <h3 className="nft-title">Intract Certified: Learner NFT</h3>
        <p className="nft-desc">Your crypto black-belt certificate</p>
        <button className="nft-btn">Claim</button>
      </div>
    </div>
  );
};

export default NFTCard;
