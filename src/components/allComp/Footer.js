// src/components/Footer.js
import React from "react";
// import "./Footer.css";
import { FaHome, FaUser, FaBell } from "react-icons/fa"; // Icons used for the footer
import FooterModal from "./FooterModal";

const Footer = () => {
  const openModalFunc = () => {};
  return (
    <div className="default-app-footer mega-footer">
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

      {/* <div className="default-inner-footer">
        <a className="footer-link " href="">
          <i className="link-icon icon-home"></i>
          <span className="link-title">Home</span>
        </a>
        <a className="footer-link " href="">
          <i className="link-icon icon-trophy"></i>
          <span className="link-title">My Contests</span>
        </a>
        <a className="footer-link " href="s">
          <i className="link-icon icon-redeem"></i>
          <span className="link-title">merchandise</span>
        </a>
        <a aria-current="page" className="footer-link " href="">
          <i className="link-icon icon-clock-new"></i>
          <span className="link-title">Upcoming</span>
        </a>
        <a className="footer-link " href="">
          <i className="link-icon icon-alarm-new"></i>
          <span className="link-title">Notifications</span>
        </a>
      </div> */}
      <div className="footer-quiz-modes">
        <a className="quiz-modes-handler ">
          <svg
            width="26.9039034px"
            height="44.844027px"
            viewBox="0 0 26.9039034 44.844027"
            version="1.1"
            className="svg-icon"
          >
            <g
              id="rr"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="02-Home-Screen-–-61"
                transform="translate(-174.000000, -713.078000)"
              >
                <g id="Group-7" transform="translate(174.000000, 713.078000)">
                  <path
                    d="M0.423,40.1995949 L2.61236849,31.9917397 L1.44369664,29.2841706 L6.66121712,9.20807119 L5.41613283,7.53128095 L3.75388899,3.70681997 C11.1679529,2.78289838 18.031814,1.97553392 25.445682,1.052 L26.9039034,4.33110662 L24.4422468,13.7949032 L21.2554544,14.191895 L19.4231237,21.2363133 L17.2853464,21.512093 L6.0427474,44.844027 L1.63317432,43.2066025 L0.423,40.1995949 Z"
                    id="Path-1440"
                    fill="#E02020"
                    className="svg-bgpath mega"
                  ></path>
                  <path
                    d="M0,39.1475906 L2.18936825,30.9397354 L1.02069676,28.2321644 L6.23802233,8.15607166 L4.99313307,6.4792819 L3.33088875,2.6548202 C10.7449522,1.73109233 17.6086197,0.923533738 25.0226841,0 L26.4809055,3.27910757 L24.0192451,12.7429047 L20.8322601,13.1398945 L19.0001259,20.1843128 L16.8623447,20.4600945 L5.61974716,43.7920227 L1.20998037,42.1545982 L0,39.1475906 Z"
                    id="Path-1441"
                    fill="#F11B1B"
                    className="svg-bgpath mega"
                  ></path>
                  <path
                    d="M19.6433674,11.7843731 L17.8100696,18.8334454 L15.8695236,19.0838192 L4.86566504,41.9202374 L2.3215824,40.9757565 L1.534,39.1862934 L5.33363684,29.6839016 L3.37447318,29.9280651 L2.58689078,28.1384037 L8.78980978,9.0896042 L6.29130324,5.72458345 L5.50372084,3.93511469 L24.1188789,1.616 L24.9064632,3.40527326 L22.8303543,11.3873814 L19.6433674,11.7843731 Z"
                    id="Path-1442"
                    fill="#0C1239"
                  ></path>
                  <path
                    d="M18.8557831,9.99509889 L17.0224872,17.0441731 L15.123056,17.2807758 C11.4828373,24.91302 7.75922259,32.5171421 4.07808073,40.1309651 L1.534,39.1862896 L4.54605444,27.8946255 L2.58689078,28.1387928 L8.00222739,7.30032999 L5.50372084,3.93530733 L8.04217776,3.61899358 C12.6738087,3.0420273 17.3052498,2.46506197 21.9368816,1.88790113 L24.1188789,1.616 L22.0425773,9.59810907 L18.8557831,9.99509889 Z"
                    id="Path-1443"
                    fill="#0B154A"
                  ></path>
                  <path
                    d="M22.1211044,3.369 L20.8533279,8.24305396 L13.6269981,9.14331488 L13.0620567,11.3183332 L17.1006271,10.815064 L15.8328506,15.689118 L11.8014576,16.1914182 L11.7958328,16.1918073 L10.8639595,19.7786947 L12.3504974,19.5934797 L3.325,38.2604223 L6.5579483,26.1408353 L4.58346481,26.3867498 L9.62566681,6.98478369 L8.22620697,5.10009245 C12.8578407,4.52312521 17.4894707,3.94596533 22.1211044,3.369"
                    id="Path-1444"
                    fill="#FEFEFE"
                    fill-rule="nonzero"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <FooterModal />
    </div>
  );
};

export default Footer;
