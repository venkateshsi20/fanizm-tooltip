// Overlay.js
import React, { useEffect } from "react";

const ViewOverlay = ({
  handleViewContestOverlay,
  setActiveTab,
  handleJoinContestOverlay,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleJoinMoreContest = () => {
    handleViewContestOverlay();
    handleJoinContestOverlay();
    setActiveTab(1);
  };
  const handleMyContest = () => {
    handleViewContestOverlay();
    handleJoinContestOverlay();
    setActiveTab(2);
  };
  return (
    <div className="overlay">
      <div className="overlay__wrap">
        <div className="overlay__content">
          <div className="overlay__header">
            <button
              type="button"
              className="close"
              onClick={() => {
                handleViewContestOverlay();
              }}
            >
              <span aria-hidden="true">×</span>
              <span className="sr-only">Close</span>
            </button>

            <div className="overlay__header-img">
              <div className="wrap ">
                <img src="https://fanizm-prod.s3.amazonaws.com/assets/img/JoinGame.svg" />
              </div>
            </div>
            <div className="overlay__header-confirm ">GAME ON</div>
          </div>

          <div className="overlay__body">
            <div className="p-0 row">
              <div className="p-0 col-xs-12">
                <div className="amount-subtext">
                  Total Balance available for this contest is your Deposit
                  Amount + Winnings + 0% of entry fee eligible to use from Bonus
                  Cash Wallet (Max ₹100000)
                </div>
              </div>
            </div>
          </div>
          <div className="overlay__footer dual-btn-footer modal-footer">
            <a
              className="joinContestConfirm single-text "
              onClick={() => {
                handleJoinMoreContest();
              }}
            >
              JOIN MORE CONTEST
            </a>
            <a
              className="joinContestConfirm single-text "
              onClick={() => {
                handleMyContest();
              }}
            >
              SEE MY CONTEST
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOverlay;
