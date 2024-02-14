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
        className="absolute left-60 top-[50%] text-white text-3xl transform -translate-y-1/2  "
      />
      <FaChevronRight
        onClick={handleNext}
        className="absolute right-60 top-[50%] text-white text-3xl transform -translate-y-1/2  "
      />
      <div className="w-full">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          className="h-[400px] w-full object-cover "
        />
      </div>
    </div>
  );
};

export default Slider;
