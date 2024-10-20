import React from "react";

const PaymentMethod = () => {
  return <>
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
  <div className="head-col-left"></div>
  <div className="head-col-center"><span className="head-title">Select Payment Method</span></div>
  <div className="head-col-right">
  <div className=""></div>
   </div>

</div>

<div className="default-header-placeholder"></div>
<div className="burger-menu-backdrop "></div>

<div className="mobile-wrap">
<div className="web-container web-container-fixed trans-web-container pay-method-wrap"> 
<div className="row">
  <div className="col-sm-12">
    <div className="payable-amt">To Pay<div className="payable-amt-view">
  <i className="font-style-normal">₹</i><span>155</span></div></div></div></div>

  <div className="how-would-you-view"></div>

  <div class="payment-method-container">
    <div class="payment-card-row">
      <div class="payment-card  payment-card-cursor">
        <div class="c-image">
          <img alt="" class="img-fluid" src="https://fanizm-prod.s3.amazonaws.com/upload/paymentgetway/1717995284.png"/>
          </div>
          <div class="payment-content">
            <div class="payments-name">Razorpay  </div>
          <div class="payements-desc">Seamless payments for you</div>
        </div>
      </div>
    </div>
  </div>

  <div class="overlay">
  <div class="overlay__wrap overlay__wrap--pay">
  <div class="overlay__content">
<div className="overlay__body">

{ true ? (
<div className="overlay__pyt-img">
<img src="qr.jpg" alt="qr"/>
</div>
)
:
<div className="overlay__pyt-img">
<img src="success.jpg" alt="qr"/>
</div>
}

</div>
    </div>
    </div>
    </div>

</div>
</div>
</div>
</div>


</div>
  </>;
};

export default PaymentMethod;
