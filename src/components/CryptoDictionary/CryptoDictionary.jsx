import React from "react";
import "./CryptoDictionary.css";
import { IoBookOutline } from "react-icons/io5";

const CryptoDictionary = () => {
  return (
    <div className="crypto-div">
      <h3>Crypto Dictionary</h3>
      <p>Your one-stop to catch up on all crypto terms</p>
      <div className="crypto-img-wrapper">
        <div className="crypto-wrapper-content">
          <div className="crypto-text">
            <h3>Web3 + Degen Glossary</h3>
            <p>Your own crypto dictionary</p>
          </div>
          <div className="crypto-bookmark">
            <IoBookOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDictionary;
