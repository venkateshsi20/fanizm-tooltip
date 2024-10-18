// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <div className="default-app-footer mega-footer">
      <div className="default-inner-footer">
        <a
          aria-current="page"
          className="footer-link  active"
          href="/app/lobby/live-quiz"
        >
          <i className="link-icon icon-home"></i>
          <span className="link-title">Home</span>
        </a>
        <a className="footer-link " href="/app/my-contests/live-quiz">
          <i className="link-icon icon-trophy"></i>
          <span className="link-title">My Contests</span>
        </a>
        <a className="footer-link " href="/app/merchandise-winnings">
          <i className="link-icon icon-redeem"></i>
          <span className="link-title">merchandise</span>
        </a>
        <a className="footer-link " href="/app/quiz-starting-soon">
          <i className="link-icon icon-clock-new"></i>
          <span className="link-title">Upcoming</span>
        </a>
        <a className="footer-link " href="/app/notification">
          <i className="link-icon icon-alarm-new"></i>
          <span className="link-title">Notifications</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
