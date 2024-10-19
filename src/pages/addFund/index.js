import React from "react";
import "../addFund"
import "../../App.css";
const AddFund = () => {
  return <>
  
  {/* <div className="toast-wrapper" style={{ Zindex: 99999 }}>
        <div className="toast-inner-wrapper blur-bg"></div>
        <div className="toast-inner-wrapper">
          <span className="icon-wrap">
            <i className=""></i>
          </span>
          <span className="text-wrap"></span>
          <i className="icon-close"></i>
        </div>
      </div> */}
        <div className="Site-content"
        style={{
          backgroundImage:
            "url('https://fanizm-prod.s3.amazonaws.com/upload/front_bg.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
      



      <div className="routing-550">
          <div className="web-body-container pb0">
            <div className="header quiz-header">
            <div className="head-col-left">
                <i className="head-action-btn icon-left-arrow"></i>
              </div>

              <div className="head-col-center"><span className="head-title">Add Funds</span></div>
              <div className="head-col-right"><div className=""></div><div className="head-right-balance"><span className="currency_code">₹</span>0</div></div>

            </div>
            <div className="default-header-placeholder"></div>
            <div className="burger-menu-backdrop "></div>

            {/* <div className="burger-menu sheet-close">
              <div className="burger-menu-header">
                <div className="left-side"></div><div className="title">More</div>
                <div className="right-side"><i className="icon-close"></i></div>
                </div><a className="weekly-leaderboard-btn">Weekly Leaderboard</a>
                <div className="web-container more-screen-container container-height pt20">
                  <ul className="drawer-menu-list">
                    <li className="drawer-menu-item">
                      <a href=""><i className="ic icon-profile"></i>Profile</a></li>
                      <li className="drawer-menu-item"><a href="/app/my-wallet">
                      <i className="ic icon-wallet-ic"></i>My Wallet</a></li>
                      <li className="drawer-menu-item">
                        <a href="">
                        <i className="ic icon-add-user"></i>Refer &amp; Earn</a></li>
                        <li className="drawer-menu-item">
                          <a aria-current="page" className="active" href="">
                            <i className="ic icon-delete"></i>Delete My Account</a></li>
                            <li className="drawer-menu-item">
                              <a aria-current="page" className="active" href="">
                                <i className="ic icon-more-large"></i>Others<i className="ic arrow-right icon-arrow-down"></i></a></li>
                                <ul className="sub-menu-close">
                                  <li className="drawer-menu-item">
                                    <a href=""><i className="ic icon-ic-info fs24"></i>About Us</a></li>
                                    <li className="drawer-menu-item">
                                      <a href="/app/terms-condition">
                                      <i className="ic icon-file"></i>Terms &amp; Conditions</a></li>
                                      <li className="drawer-menu-item">
                                        <a href=""><i className="ic icon-rules">
                                          </i>Rules and Scoring</a></li><li className="drawer-menu-item">
                                            <a href="#">
                                            <i className="ic icon-lock"></i>Privacy Policy</a></li>
                                            <li className="drawer-menu-item">
                                              <a href="#">
                                              <i className="ic icon-mail"></i>Contact Us</a></li></ul>
                                              <li className="drawer-menu-item">
                                                <a aria-current="page" className="active" href="#">
                                                  <i className="ic icon-logout"></i>Logout</a></li>
                                                  </ul></div>
            </div> */}

  <div className="mobile-wrap">
<div className="web-container web-container-fixed add-funds-wrapper xwhite-bg">
<div className="add-funds-header">
  <div>
    <div className="position-relative show-currency-icn overlay-fixed-view  form-group">
      <label for="formBasicText" className="control-label">Enter Amount (₹)</label>
<input autocomplete="off" placeholder="0" type="number" id="formBasicText" 
className="form-control" value="155" fdprocessedid="8zrum"/>
  <span className="forminput-currency">₹</span>
  </div>
  </div>
  </div>

  <div className="add-funds-body">
    <div><div className="amount-section"></div></div>
    <div className="dpst-summary">
    <div className="dpst-heading">Deposit Summary</div>
    <div className="dpst-inner">
      <div className="dpst-amt d-flex">
        <span className="amt-txt">Deposit Amount</span>
        <span className="amt-val">₹ 155.00</span></div>
        <div className="dpst-gst d-flex">
          <span className="amt-txt">GST(28%)</span>
          <span className="amt-val">₹ 33.9</span></div></div>
          <div className="dpst-total d-flex">
            <span className="inclusive-label">Wallet Deposit</span>
            <span className="tot-val">₹ 121.09</span></div></div>
            <div className="gst-number-view">
              <div className="gst-checkbox-view">
                <div className="checkbox-view ">
                  <i className=""></i></div> 
                  
                  <span>I have GST Number</span></div>
                  
                  <div className="gst-input-view">
                    <div class="position-relative form-group">
                      <input autocomplete="off" maxlength="15" placeholder="Enter 15 digit GST number" name="gstNumber" type="text" id="gstNumber" className="form-control" value="" fdprocessedid="eceszp"/>
                      </div></div>
                  </div>
                  <div className="promo-code-section">
                    <div className="apply-promocode">Apply Promocode</div>
                    <div className="promocode"><div className="form-group">
          <input autocomplete="off" placeholder="Type promocode here" type="text" id="formBasicText" className="form-control" value="" fdprocessedid="6fevt"/>
          </div>
          <div className="btn-apply">Apply</div></div></div>
          <div className="text-center add-fund">
            <a className="button button-primary-rounded button-block">Add Cash</a>
            </div>
            </div>

</div>
</div>

 </div></div>
 </div>
      </>
};

export default AddFund;
