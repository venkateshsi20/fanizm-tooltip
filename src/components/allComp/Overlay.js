// Overlay.js
import React, { useEffect } from "react";

const Overlay = ({
  handleJoinContestOverlay,
  quizData,
  handleViewContestOverlay,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="overlay">
      <div className="overlay__wrap">
        <div className="overlay__content">
          <div className="overlay__header">
            <button
              type="button"
              className="close"
              onClick={() => {
                handleJoinContestOverlay();
              }}
            >
              <span aria-hidden="true">×</span>
              <span className="sr-only">Close</span>
            </button>

            <div className="overlay__header-img">
              <div className="wrap ">
                <img src="https://fanizm-prod.s3.amazonaws.com/assets/img/Confirmation.svg" />
              </div>
            </div>
            <div className="overlay__header-confirm ">Confirmation</div>
          </div>

          <div className="overlay__body">
            <div className="mt20 row">
              <div className="col-xs-12">
                <div className="confirm-quiz-heading">
                  <div className="quiz-name">{quizData.title}</div>
                  <div className="winning-amt">
                    <span>Win</span> Prizes
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <div className="fee-container">
                  <div className="lable-text">Current Balance</div>
                  <div className="payable-amount-value">
                    <span className="">₹0.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-0 row">
              <div className="p-0 col-xs-12">
                <div className="amount-subtext">
                  Total Balance available for this contest is your Deposit
                  Amount + Winnings + 0% of entry fee eligible to use from Bonus
                  Cash Wallet (Max ₹100000)
                </div>
              </div>
            </div>
            <div className="p-0 row">
              <div className="col-xs-12">
                <div className="fee-container">
                  <div className="lable-text">Joining Amount</div>
                  <div className="payable-amount-value">
                    <span className="confirmation">Free</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-0 row">
              <div className="p-0 col-xs-12">
                <div className="amount-subtext amount-subtext-font10 mb-0">
                  By joining this contest, you accept Fanizm T&amp;C I also
                  agree to be contacted by Fanizm and their partners.
                  <a
                    className="primary"
                    target="_blank"
                    href="/terms-condition"
                  >
                    {" "}
                    Go to T&amp;C{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay__footer dual-btn-footer modal-footer">
            <a
              className="joinContestConfirm single-text "
              onClick={() => {
                handleViewContestOverlay();
              }}
            >
              Confirm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
