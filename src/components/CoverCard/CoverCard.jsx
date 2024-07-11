import React from "react";
import "./CoverCard.css";
import CoinImg from "../../assets/coin.svg";

const CoverCard = () => {
  return (
    <div className="cover-card">
      <details>
        <summary className="cover-card-header">
          <div className="cover-card-img-wrapper">
            <img
              src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png"
              className="cover-card-img"
              alt=""
              width={12}
              height={12}
            />
          </div>
          <div className="cover-card-details">
            <h3 className="cover-card-h3">Basics of Crypto</h3>
            <p className="cover-card-p">
              The safest and easiest place to start your crypto journey!
            </p>
            <hr className="cover-card-hr" />
            <div className="cover-card-coins">
              <img src={CoinImg} alt="coin" width={18} height={16} />
              <p className="cover-card-xp">1490 XPs</p>
            </div>
          </div>
        </summary>
        <div className="cover-card-body">
          <div className="cover-card-item">
            <div className="cover-card-item-img-wrapper">
              <img
                className="cover-card-item-img"
                src="https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png"
                alt=""
              />
            </div>
            <div>
              <p>#1: But what is crypto and</p>
            </div>

            <div>o</div>
          </div>
        </div>
      </details>
    </div>
  );
};

export default CoverCard;
