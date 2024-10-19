// Overlay.js
import React, { useEffect } from "react";

const Overlay = ({ handleJoinContestOverlay }) => {
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);
  return (
    <div className="overlay">
      <div className="overlay__wrap">
        <div className="overlay__content">
          <div className="overlay__header">
            <button
              type="button"
              class="close"
              onClick={() => {
                handleJoinContestOverlay();
              }}
            >
              <span aria-hidden="true">×</span>
              <span class="sr-only">Close</span>
            </button>

            <div class="overlay__header-img">
              <div class="wrap ">
                <img src="https://fanizm-prod.s3.amazonaws.com/assets/img/Confirmation.svg" />
              </div>
            </div>
            <div class="overlay__header-confirm ">Confirmation</div>
          </div>

          <div class="overlay__body">
            <div class="mt20 row">
              <div class="col-xs-12">
                <div class="confirm-quiz-heading">
                  <div class="quiz-name">Hanuman movie</div>
                  <div class="winning-amt">
                    <span>Win</span> Prizes
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div class="fee-container">
                  <div class="lable-text">Current Balance</div>
                  <div class="payable-amount-value">
                    <span class="">₹0.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-0 row">
              <div class="p-0 col-xs-12">
                <div class="amount-subtext">
                  Total Balance available for this contest is your Deposit
                  Amount + Winnings + 0% of entry fee eligible to use from Bonus
                  Cash Wallet (Max ₹100000)
                </div>
              </div>
            </div>
            <div class="p-0 row">
              <div class="col-xs-12">
                <div class="fee-container">
                  <div class="lable-text">Joining Amount</div>
                  <div class="payable-amount-value">
                    <span class="confirmation">Free</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-0 row">
              <div class="p-0 col-xs-12">
                <div class="amount-subtext amount-subtext-font10 mb-0">
                  By joining this contest, you accept Fanizm T&amp;C I also
                  agree to be contacted by Fanizm and their partners.
                  <a class="primary" target="_blank" href="/terms-condition">
                    {" "}
                    Go to T&amp;C{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="overlay__footer dual-btn-footer modal-footer">
            <a class="joinContestConfirm single-text ">Confirm</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
