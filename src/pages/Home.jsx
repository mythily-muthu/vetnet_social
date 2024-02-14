import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import WhyUs from "../components/WhyUs";
import OurServices from "../components/OurServices";
import ValuedPartners from "../components/ValuedPartners";
import Founder from "../components/Founder";
import Disclaimer from "../components/Disclaimer";
const Home = () => {
  return (
    <div className="flex flex-col w-full h-full ">
      <Header />
      <Slider />
      <WhyUs />
      <OurServices />
      <ValuedPartners />
      <Founder />
      <Disclaimer />
    </div>
  );
};

export default Home;
