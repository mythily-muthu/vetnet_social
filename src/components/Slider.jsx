import React, { useState } from "react";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.jpeg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [slider1, slider2];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <FaChevronLeft
        onClick={handlePrev}
        className="absolute z-10 left-60 top-[50%] text-white text-3xl "
      />
      <FaChevronRight
        onClick={handleNext}
        className="absolute right-60 z-10 top-[50%] text-white text-3xl "
      />
      <div className="w-full relative">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="h-[400px] w-full object-cover transition-transform duration-300 "
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
    </div>
  );
};

export default Slider;
