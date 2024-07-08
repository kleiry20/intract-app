import React from "react";
import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-brand-div">
        <div className="footer-brand">
          <a href="">intract.</a>
          <p>
            We are your personal guide for exploring web3 projects & earning
            100x rewards
          </p>
        </div>
        <div className="footer-content">
          <FooterBlock
            title={"intract"}
            links={["Explore Quests", "Communities", "Alpha Hub"]}
          />
          <FooterBlock
            title={"earn"}
            links={["Refer & Earn", "Leaderboard", "Achievements"]}
          />
          <FooterBlock
            title={"about"}
            links={[
              "Product Roadmap",
              "Affiliate Program",
              "Sign up Program",
              "Growth Community",
              "Blogs",
            ]}
          />
          <FooterBlock
            title={"support"}
            links={[
              "Help Center",
              "Create your quest",
              "Terms of Service",
              "Privacy Policy",
              "Community Guidelines",
            ]}
          />
        </div>
      </div>

      <div className="disclaimer-div">
        <p>
          Disclaimer:{" "}
          <span>
            Crypto Products, Virtual Digital Assets, and NFTs are unregulated
            and can be highly risky. There may be no regulatory recourse for any
            loss from such transactions. We advise the viewer to proceed with
            caution. Nothing in this website or any communication published by
            us amounts to, is intended to be, or should be construed as
            investment or purchase advice of any kind or financial advice or
            promotion under any applicable laws. Any decision made based on the
            content provided on this website or any communication published by
            us shall not be attributable to us.
          </span>
        </p>
      </div>
      <div className="footer-social">
        <p>
          Created by <a href="/">intract</a>
        </p>
        <div className="socials-wrapper">
          <div className="socials">
            <FaTwitter className="social-icon" style={{ color: "#387CFF" }} />
          </div>
          <div className="socials">
            <FaDiscord className="social-icon" style={{ color: "#04A5BE" }} />
          </div>
          <div className="socials">
            <FaTelegram className="social-icon" style={{ color: "#387CFF" }} />
          </div>
          <div className="socials">
            <FaSpotify className="social-icon" style={{ color: "#07FE01" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

export const FooterBlock = ({ title, links }) => {
  return (
    <div className="footer-block">
      <h3>{title}</h3>

      <div className="footer-links">
        {links.map((link, index) => (
          <a href="/" key={index}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};
