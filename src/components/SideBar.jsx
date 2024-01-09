import React from "react";
import logo from "../assets/Image.png";
import downArrow from "../assets/ChevronDown.png";
import Home from "../assets/Vector.png";
import Orders from "../assets/Vector-1.png";
import Products from "../assets/Vector-2.png";
import Delivery from "../assets/Vector-3.png";
import Marketing from "../assets/Marketing.png";
import Analytics from "../assets/Vector-4.png";
import Payments from "../assets/Vector-5.png";
import Tools from "../assets/Vector-6.png";
import Discounts from "../assets/Vector-7.png";
import Audience from "../assets/Vector-8.png";
import Appreance from "../assets/Vector-9.png";
import Plugins from "../assets/Vector-10.png";
import wallet from "../assets/wallet.png";
const SideBar = () => {
  return (
    <div className="sidebarContainer">
      <div className="navBarTop">
        <img src={logo} alt="" className="companyLogo" />
        <div className="navbarText">
          <div className="companyTitle">
            <h3>Nishyan</h3>
          </div>
          <div className="visitStore">visit store</div>
        </div>
        <img src={downArrow} alt="" />
      </div>
      <div className="navBarMain">
        <div className="navBarBody">
          <img src={Home} alt="" />
          <span className="navBarBodyText">Home</span>
        </div>
        <div className="navBarBody">
          <img src={Orders} alt="" />
          <span className="navBarBodyText">Orders</span>
        </div>
        <div className="navBarBody">
          <img src={Products} alt="" />
          <span className="navBarBodyText">Products</span>
        </div>
        <div className="navBarBody">
          <img src={Delivery} alt="" />
          <span className="navBarBodyText">Delivery</span>
        </div>
        <div className="navBarBody">
          <img src={Marketing} alt="" />
          <span className="navBarBodyText">Marketing</span>
        </div>
        <div className="navBarBody">
          <img src={Analytics} alt="" />
          <span className="navBarBodyText">Analytics</span>
        </div>
        <div className="navBarBody">
          <img src={Payments} alt="" />
          <span className="navBarBodyText">Payments</span>
        </div>
        <div className="navBarBody">
          <img src={Tools} alt="" />
          <span className="navBarBodyText">Tools</span>
        </div>
        <div className="navBarBody">
          <img src={Discounts} alt="" />
          <span className="navBarBodyText">Discounts</span>
        </div>
        <div className="navBarBody">
          <img src={Audience} alt="" />
          <span className="navBarBodyText">Auidence</span>
        </div>
        <div className="navBarBody">
          <img src={Appreance} alt="" />
          <span className="navBarBodyText">Appreance</span>
        </div>
        <div className="navBarBody">
          <img src={Plugins} alt="" />
          <span className="navBarBodyText">Plugins</span>
        </div>
      </div>
      <div className="baseNavButton">
        <div className="outlineWallet">
          <img src={wallet} alt="" className="walletImg" />
        </div>
        <div className="baseEndText">
          <p className="availabelText">Available credits</p>
          <p className="availableNumber">222.10</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
