import React from "react";
import Button from "./Button";
import services from "../assets/services.png";
import { useNavigate } from "react-router-dom";
import TitleContainer from "./TitleContainer";

const OurServices = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col w-full p-7">
      <div className="flex flex-col md:flex-col my-10 w-full h-full sm:px-10 md:w-[90%] mx-auto bg-gray-50">
        <TitleContainer text={"Our Services"} />
        {/* left */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex p-3 md:p-12 flex-col gap-y-5">
            <h1 className="font-bold text-2xl lg:text-3xl">
              <span className="">Empowering</span> Veterans -{" "}
              <span className="text-gray-600">One-Stop Solution.</span>
            </h1>
            <p className="flex md:text-start font-light text-lg tracking-wider text-justify leading-8 ">
              At VetNet.Social, we simplify your transition from military to
              civilian life with targeted services. From crafting standout
              resumes to optimizing your LinkedIn profile, we help you shine in
              the job market. Benefit from personalized career counseling, mock
              interviews, and skill-specific certifications like CSM and PMP.
              We're here to guide you every step of the way.
            </p>
            <div className="flex">
              <Button
                onClick={handleClick}
                type="button"
                className="bg-btn-blue text-white rounded-lg cursor-pointer"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex w-full justify-center items-center">
            <img
              src={services}
              alt="services"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
