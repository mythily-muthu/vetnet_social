import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import WhyUs from "../components/WhyUs";
const Home = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <Header />
      <Slider />
      <WhyUs />
    </div>
  );
};

export default Home;
