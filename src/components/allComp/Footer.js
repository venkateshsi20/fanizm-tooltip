// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav-item">
        <img src="/assets/home-icon.png" alt="Home" />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <img src="/assets/gift-icon.png" alt="Gifts" />
        <span>Gifts</span>
      </div>
      <div className="nav-item center">
        <img
          src="/assets/fanizm-logo.png"
          alt="Fanizm"
          className="footer-logo"
        />
      </div>
      <div className="nav-item">
        <img src="/assets/tickets-icon.png" alt="Tickets" />
        <span>Tickets</span>
      </div>
      <div className="nav-item">
        <img src="/assets/profile-icon.png" alt="Profile" />
        <span>Profile</span>
      </div>
    </footer>
  );
};

export default Footer;
