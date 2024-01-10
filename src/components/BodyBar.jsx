import React from "react";
import DownArrow from "../assets/downArrow.png";
const BodyBar = () => {
  return (
    <div className="bodyContainer">
      <div className="bodyStart">
        <div className="overviewContainer">
          <div className="overviewText">
            <p className="overview">Overview</p>
          </div>
          <div className="lastMonthContainer">
            <p className="lastMonth">Last Month</p>
            <img src={DownArrow} alt="" />
          </div>
        </div>
        <div className="razorPayContainer">
          <div className="razorPayText">
            <p className="razorPay">Razorpay</p>
          </div>
          <div className="cashFreeText">
            <p className="cashFree">Cashfree</p>
          </div>
        </div>
        <div className="divider">
          <div className="selectedDivider"></div>
          <div className="dividerlargeLine"></div>
        </div>
        <div className="ordersContainer">
          <div className="orderText">
            <p className="orders">Total Orders</p>
            <p className="ordersValue">231</p>
          </div>
          <div className="amountText">
            <p className="amountRecieved">Amount Recieved</p>
            <p className="amountRecievedValue">&#8377; 23,92,312.19</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyBar;
