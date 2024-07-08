import React from "react";
import { PiTelevision } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <p className="intract">intract.</p>
      <ul className="links">
        <a href="">Compass</a>
        <a href="">Explore</a>
        <a href="">Academy</a>
        <a href="">NFTs</a>
        <a href="">For Projects</a>
      </ul>

      <div className="header-options">
        <div className="search-div">
          <IoSearch className="search-icon" />
          <input
            className="search"
            type="text"
            placeholder="Search for ecosystems, trending quests etc,."
          />
        </div>

        <div className="feed-div">
          <div className="feed">
            <PiTelevision className="feed-icon" />
          </div>
          <button className="btn-signIn">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
