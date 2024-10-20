import React from "react";
import "./viewContest.css";
import "../../App.css";
import Tippy from "@tippyjs/react";
import { FaArrowLeft, FaShare } from "react-icons/fa";
import Footer from "../../components/allComp/Footer";


const viewContest = () => {
  const contestTab = [
    { id: 1, label: "All Contest" },
    { id: 2, label: "My Contest" },
  ];
  const upcomingContest = [
    // {
    //   id: 1,
    //   contestType: "MEGA CONTEST",
    //   contestDes: "Enter the hottest contest with mega prize.",
    //   type: "Practice Contest",
    //   heading: "Practice Contest",
    //   entry: "Entry Ticket",
    //   buttonType: "free",
    //   left: 5,
    //   slots: 10,
    // },
    {
      id: 2,
      contestType: "HEAD TO HEAD",
      contestDes: "Head 2 Head",
      type: "Fast filling!",
      heading: "Practice Contest",
      entry: "Entry Ticket",
      buttonType: "₹ 55",
      left: 1,
      slots: 2,
    },
  ];
  const myContest = [
    { id: 1, label: "All Contest" },
    { id: 2, label: "My Contest" },
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
            <div className="header quiz-header">
              <div className="head-col-left">
              <div className="head-col-left-icon">
                <FaArrowLeft className="head-action-btn icon-left-arrow" />
                </div>
              </div>
              <div className="head-col-center">
              <span class="head-title">My Quiz Contests</span>
                
              </div>
              <div className="head-col-right">
              {/* <div className="head-col-right-icon">
                <div className=""></div>
                </div> */}
              </div>
            </div>
            <div class="default-header-placeholder"></div>
            <div className="burger-menu-backdrop "></div>
            {/* main sections */}
            <div className="mobile-wrap">
            <div className="tabs-primary-nav ">
              <a className="select">Mega</a><a className="">One On One</a>
              </div>

              <div className="ptr my-contest-ptr__pull-down lighten">
                <div className="ptr__children">
                  <div className="tabs-primary">
                    <div className="clearfix row">
                    <div className="top-fixed my-contest-tab circular-tab new-tab  col-xs-12">
                      <ul className="nav"><li role="presentation" className="active">
                        <a role="button" href="#">Upcoming</a></li>
                        <li role="presentation" class="live-contest ">
                          <a role="button" href="#"><span class="live-highlight"><img src="icon-live.png" alt="live"/>
                          {/* <span className="live-indicator"></span>   */}
                          </span>Live</a></li><li role="presentation" className="">
                      <a role="button" href="#">Completed</a></li></ul></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="web-container contest-listing-web-conatiner header-margin minus-header-height bg-white contest-listing-new ML-contest-listing LQ-contest-list-view with-detail-screen">
                <div className="webcontainer-inner">
                  <div className="ptr">
                    <div className="ptr__pull-down">
                      <div className="ptr__loader ptr__pull-down--loading">
                        <div className="lds-ellipsis">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </div>
                      <div className="ptr__pull-down--pull-more"></div>
                    </div>
                    <div className="ptr__children">
                      <div className="container-tab-wrap show">
                        <div className="tab-group live-quiz-tab">
                          {/* <ul>
                            {contestTab.map((tab) => (
                              <li
                                class={`${
                                  activeTab === tab.id ? "active" : ""
                                }`}
                                onClick={() => {
                                  setActiveTab(tab.id);
                                }}
                              >
                                <span>{tab.label} </span>
                              </li>
                            ))}
                          </ul> */}
                        </div>
                        <div className="row">
                          <div className="col-sm-12 w-100">
                            <div className="infinite-scroll-component__outerdiv">
                              <div
                                className="infinite-scroll-component"
                                style={{ height: "auto", overflow: "auto" }}
                              >
                                {true && (
                                  <div className="contest-list-wrapper xmt20 mb20">
                                    {upcomingContest.map((contest, i) => (
                                      <div className="contest-listing-card is-mega-contest">
                                        <div className="rookie-contest-view title-wrap-inner d-flex">
                                          <div className="contest-listing-card-header">
                                            <img
                                              src="https://fanizm-prod.s3.amazonaws.com/assets/img/1711275142.jpeg"
                                              alt=""
                                              className="contest-img"
                                            />
                                            <div className="contest-right">
                                              <div className="contest-name-heading">
                                                {contest.contestType}
                                              </div>
                                              <div className="contest-name-heading-description">
                                                {contest.contestDes}{" "}
                                              </div>
                                            </div>
                                            

                                          </div>
                                          <div class="title-right">movies</div>
                                        </div>
                                        <div>
                                          <div className="contest-list contest-listing-list xquiz-contest-card contest-card-body contest-box">
                                            <div className="contest-list-header">
                                              <div className="contest-heading">
                                                <h3 className="win-type">
                                                  <span className="position-relative">
                                                    <span>{contest.type}</span>
                                                  </span>
                                                  
                                                  <FaShare className="icon-share-arrow" />
                                                </h3>
                                                <div className="max-prize-pool pool-with-prize-r">
                                                  <div className="prize-pool-l">
                                                    {contest.heading}
                                                  </div>
                                                  {/* <Tippy
                                                    key={i} // Unique id for Tippy
                                                    theme="custom"
                                                    animation="fade"
                                                    visible={true}
                                                    content={
                                                      "This is a highlighted movie!"
                                                    }
                                                    disabled={
                                                      i == 1 ||
                                                      joinContestOverlay
                                                    } // Disable tooltip when not highlighted
                                                  >
                                                    <div
                                                      className={`display-table-cell v-mid position-relative entry-criteria ${
                                                        i == 0 &&
                                                        !joinContestOverlay
                                                          ? "highlighted"
                                                          : ""
                                                      }`}
                                                      style={{
                                                        zIndex:
                                                          i == 0 ? "100" : null,
                                                      }}
                                                    >
                                                      <span className="entry-txt">
                                                        {contest.entry}{" "}
                                                      </span>{" "}
                                                      <button
                                                        type="button"
                                                        className="white-base btnStyle btn-rounded btn btn-primary"
                                                        onClick={() =>
                                                          handleJoinContestOverlay()
                                                        }
                                                      >
                                                        {contest.buttonType}
                                                      </button>
                                                    </div>
                                                  </Tippy> */}
                                                </div>
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
                                                <div class="view-btn">View</div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* {i == 0 && !joinContestOverlay ? (
                                          <div className="quiz-overlay" />
                                        ) : null} */}
                                      </div>
                                    ))}
                                  </div>
                                )}
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
        </div>
        <Footer active={1} />
      </div>
    </>
  );
};

export default viewContest;
