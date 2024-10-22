import React, { useState } from "react";
import "./viewContest.css";
import "../../App.css";
import Tippy from "@tippyjs/react";
import { FaArrowLeft, FaShare, FaTrophy } from "react-icons/fa";
import Footer from "../../components/allComp/Footer";
import { useNavigate } from "react-router-dom";
import CircularProgress from "../../components/allComp/CircularProgress";

const ViewContest = () => {
  const nevigate = useNavigate();
  const [viewContest, setViewContest] = useState(0);
  const upcomingContest = [
    {
      id: 2,
      contestType: "HEAD TO HEAD",
      contestDes: "Head 2 Head",
      type: "Practice Contest",
      heading: "Practice Contest",
      entry: "Entry Ticket",
      buttonType: "₹ 55",
      left: 1,
      slots: 2,
    },
  ];

  return (
    <>
      <div className="toast-wrapper" style={{ Zindex: 99999 }}>
        <div className="toast-inner-wrapper blur-bg"></div>
        <div className="toast-inner-wrapper">
          <span className="icon-wrap">
            <i className=""></i>
          </span>
          <span className="text-wrap"></span>
          <i className="icon-close"></i>
        </div>
      </div>
      <div
        className="Site-content"
        style={{
          backgroundImage:
            "url('https://fanizm-prod.s3.amazonaws.com/upload/front_bg.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="routing-550">
          <div className="web-body-container pb0">
            {viewContest === 0 ? (
              <>
                <div className="header quiz-header">
                  <div className="head-col-left">
                    <div className="head-col-left-icon">
                      <FaArrowLeft className="head-action-btn icon-left-arrow" />
                    </div>
                  </div>
                  <div className="head-col-center">
                    <span className="head-title">My Quiz Contests</span>
                  </div>
                  <div className="head-col-right"></div>
                </div>
                <div className="default-header-placeholder"></div>
                <div className="burger-menu-backdrop "></div>
                <div className="mobile-wrap">
                  <div className="tabs-primary-nav ">
                    <a className="select">Mega</a>
                    <a className="">One On One</a>
                  </div>

                  <div className="ptr my-contest-ptr__pull-down lighten">
                    <div className="ptr__children">
                      <div className="tabs-primary">
                        <div className="clearfix row">
                          <div className="top-fixed my-contest-tab circular-tab new-tab  col-xs-12">
                            <ul className="nav">
                              <li role="presentation" className="active">
                                <a role="button" href="#">
                                  Upcoming
                                </a>
                              </li>
                              <li role="presentation" className="live-contest ">
                                <a role="button" href="#">
                                  <span className="live-highlight">
                                    <img src="images/icon-live.png" alt="live" />
                                    <span className="live-indicator"></span>
                                  </span>
                                  Live
                                </a>
                              </li>
                              <li role="presentation" className="">
                                <a role="button" href="#">
                                  Completed
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="web-container contest-listing-web-conatiner header-margin minus-header-height bg-white contest-listing-new ML-contest-listing LQ-contest-list-view with-detail-screen">
                    <div className="webcontainer-inner">
                      <div className="ptr">
                        <div className="ptr__children">
                          <div className="container-tab-wrap show">
                            <div className="row">
                              <div className="col-sm-12 w-100">
                                <div className="infinite-scroll-component__outerdiv">
                                  <div
                                    className="infinite-scroll-component"
                                    style={{ height: "auto", overflow: "auto" }}
                                  >
                                    <div className="contest-list-wrapper xmt20 mb20">
                                      {upcomingContest.map((contest, i) => (
                                        <div className="contest-listing-card is-mega-contest">
                                          <div className="rookie-contest-view title-wrap-inner d-flex">
                                            <div className="contest-listing-card-header">
                                              <div className="contest-right">
                                                <div className="contest-name-heading">
                                                  Pushpa The Rise
                                                </div>
                                                <div className="contest-name-heading-description">
                                                  <div
                                                    class="que-timer"
                                                    style={{ display: "flex" }}
                                                  >
                                                    <span class="timer">
                                                      <div class="timer link-danger">
                                                        02 : 17 : 05
                                                      </div>
                                                    </span>
                                                    <span class="separator">
                                                      .
                                                    </span>
                                                    <span class="question">
                                                      10 Questions
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="title-right">
                                              movies
                                            </div>
                                          </div>
                                          <div>
                                            <div
                                              className="contest-list contest-listing-list xquiz-contest-card contest-card-body contest-box"
                                              style={{ marginBottom: "20px" }}
                                            >
                                              <div className="contest-list-header">
                                                <div className="contest-heading">
                                                  <h3 className="win-type">
                                                    <span className="position-relative">
                                                      <span>
                                                        Test your skils
                                                      </span>
                                                    </span>

                                                    <FaShare className="icon-share-arrow" />
                                                  </h3>
                                                </div>
                                                <div className="display-table d-flex top-btm-10px contest-pbar-view highlighted">
                                                  <div className="progress-bar-default display-table-cell v-mid">
                                                    <div className="progress">
                                                      <div
                                                        role="progressbar"
                                                        className="progress-bar"
                                                        aria-valuenow={250}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{
                                                          width: `${
                                                            ((contest.slots -
                                                              contest.left) /
                                                              contest.slots) *
                                                            100
                                                          }%`,
                                                        }}
                                                      ></div>
                                                    </div>

                                                    <div className="progress-bar-value">
                                                      <span className="total-entries">
                                                        {contest.left} left
                                                      </span>
                                                      <span className="min-entries">
                                                        {contest.slots} Slots
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <Tippy
                                                    theme="custom"
                                                    animation="fade"
                                                    visible={true}
                                                    content={
                                                      "This is a highlighted movie!"
                                                    }
                                                  >
                                                    <div
                                                      className="view-btn "
                                                      onClick={() => {
                                                        setViewContest(1);
                                                      }}
                                                    >
                                                      View
                                                    </div>
                                                  </Tippy>
                                                </div>
                                              </div>
                                              <div className="quiz-overlay" />
                                            </div>
                                            {/* <div className="contest-list contest-listing-list xquiz-contest-card contest-card-body contest-box">
                                              <div className="contest-list-header">
                                                <div className="contest-heading">
                                                  <h3 className="win-type">
                                                    <span className="position-relative">
                                                      <span>
                                                        {contest.type}
                                                      </span>
                                                    </span>

                                                    <FaShare className="icon-share-arrow" />
                                                  </h3>
                                                </div>
                                                <div className="display-table d-flex top-btm-10px contest-pbar-view">
                                                  <div className="progress-bar-default display-table-cell v-mid">
                                                    <div className="progress">
                                                      <div
                                                        role="progressbar"
                                                        className="progress-bar"
                                                        aria-valuenow={250}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}
                                                        style={{
                                                          width: `${
                                                            ((contest.slots -
                                                              contest.left) /
                                                              contest.slots) *
                                                            100
                                                          }%`,
                                                        }}
                                                      ></div>
                                                    </div>

                                                    <div className="progress-bar-value">
                                                      <span className="total-entries">
                                                        {contest.left} left
                                                      </span>
                                                      <span className="min-entries">
                                                        {contest.slots} Slots
                                                      </span>
                                                    </div>
                                                  </div>
                                                  <div
                                                    className="view-btn"
                                                    onClick={() => {
                                                      setViewContest(1);
                                                    }}
                                                  >
                                                    View
                                                  </div>
                                                </div>
                                              </div>
                                            </div> */}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer active={1} />
              </>
            ) : viewContest === 1 ? (
              <>
                <div className="header quiz-header">
                  <div
                    className="head-col-left"
                    onClick={() => {
                      setViewContest(0);
                    }}
                  >
                    <div className="head-col-left-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="head-action-btn icon-left-arrow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="head-col-center">
                    <span className="head-title">Pushpa The Rise</span>
                  </div>
                  <div className="head-col-right"></div>
                </div>
                <Tippy
                  theme="custom"
                  animation="fade"
                  visible={true}
                  content={"This is a highlighted movie!"}
                  placement="bottom"
                >
                  <div
                    className="overlay__pyt-img highlighted"
                    onClick={() => {
                      setViewContest(2);
                    }}
                  >
                    <img src="images/view-contest.jpg" alt="qr" />
                  </div>
                </Tippy>
                <div className="button-group quiz-lang-header">
                  <button className="button left">Language</button>
                  <button className="button right">English</button>
                </div>
              </>
            ) : viewContest === 2 ? (
              <>
                <div className="header quiz-header">
                  <div
                    className="head-col-left"
                    onClick={() => {
                      setViewContest(1);
                    }}
                  >
                    <div className="head-col-left-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="head-action-btn icon-left-arrow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="head-col-center">
                    <span className="head-title">Pushpa The Rise</span>
                  </div>
                  <div className="head-col-right"></div>
                </div>{" "}
                <Tippy
                  theme="custom"
                  animation="fade"
                  visible={true}
                  content={"This is a highlighted movie!"}
                  placement="bottom"
                >
                  <div
                    className="overlay__pyt-img highlighted"
                    onClick={() => {
                      setViewContest(3);
                    }}
                  >
                    <img src="images/qst-1.png" alt="qr" />
                  </div>
                </Tippy>
              </>
            ) : viewContest === 3 ? (
              <>
                <div className="header quiz-header">
                  <div
                    className="head-col-left"
                    onClick={() => {
                      setViewContest(2);
                    }}
                  >
                    <div className="head-col-left-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="head-action-btn icon-left-arrow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="head-col-center">
                    <span className="head-title">Pushpa The Rise</span>
                  </div>
                  <div className="head-col-right"></div>
                </div>{" "}
                <Tippy
                  theme="custom"
                  animation="fade"
                  visible={true}
                  content={"This is a highlighted movie!"}
                  placement="bottom"
                >
                  <div
                    className="overlay__pyt-img highlighted"
                    onClick={() => {
                      setViewContest(4);
                    }}
                  >
                    <img src="images/qst-2.png" alt="qr" />
                  </div>
                </Tippy>
              </>
            ) : (
              <>
                <div className="header quiz-header">
                  <div
                    className="head-col-left"
                    onClick={() => {
                      setViewContest(3);
                    }}
                  >
                    <div className="head-col-left-icon">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        className="head-action-btn icon-left-arrow"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="head-col-center">
                    <span className="head-title">Pushpa The Rise</span>
                  </div>
                  <div className="head-col-right"></div>
                </div>{" "}
                <Tippy
                  theme="custom"
                  animation="fade"
                  visible={true}
                  content={"This is a highlighted movie!"}
                  placement="bottom"
                >
                  <div
                    className="overlay__pyt-img highlighted"
                    onClick={() => {
                      nevigate("/");
                    }}
                  >
                    <img src="images/result.png" alt="qr" />
                  </div>
                </Tippy>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewContest;
