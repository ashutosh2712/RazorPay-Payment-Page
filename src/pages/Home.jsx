import React from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import BodyBar from "../components/BodyBar";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <BodyBar />
    </div>
  );
};

export default Home;
