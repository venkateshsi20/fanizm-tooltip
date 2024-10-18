// src/components/Footer.js
import React from "react";
// import "./Footer.css";
import { FaHome, FaUser, FaBell } from "react-icons/fa"; // Icons used for the footer

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-item">
          <FaHome className="footer-icon" />
          <div className="footer-label">
            <span>Home</span>
          </div>
        </div>
        <div className="footer-item">
          <FaUser className="footer-icon" />
          <div className="footer-label">
            <span>My Contest</span>
          </div>
        </div>
        <div className="footer-item">
          <FaBell className="footer-icon" />
          <div className="footer-label">
            <span>Merchandise</span>
          </div>
        </div>
        <div className="footer-item">
          <FaBell className="footer-icon" />
          <div className="footer-label">
            <span>UpComing</span>
          </div>
        </div>
        <div className="footer-item">
          <FaBell className="footer-icon" />
          <div className="footer-label">
            <span>Notifications</span>
          </div>
        </div>
      </div>
      <div className="footer-fazImg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Fanizm-logo.png" // Replace with your own logo if needed
          alt="Fanizm Logo"
          className="footer-logo"
        />
      </div>
    </div>
  );
};

export default Footer;
