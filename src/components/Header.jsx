import React from "react";
import work from "../assets/work.png";
import search from "../assets/search.png";
import message from "../assets/message.png";
import polygon from "../assets/Polygon.png";
const Header = () => {
  return (
    <div className="headerContainer">
      <div className="leftSideItems">
        <p className="payment">Payments</p>
        <div className="headerWork">
          <img src={work} alt="" className="workImage" />
          <p className="howItWork">How it works</p>
        </div>
      </div>
      <div className="headerSearchBar">
        <img src={search} alt="" className="searchIcon" />
        <input
          type="text"
          placeholder="Search features,tutorials,etc."
          className="searchBar"
        />
      </div>
      <div className="headerEnd">
        <div className="wrapperEnd">
          <div className="message">
            <img src={message} alt="" />
          </div>
          <div className="polygon">
            <img src={polygon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
