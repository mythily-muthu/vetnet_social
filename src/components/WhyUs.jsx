import React from "react";
import { companyInfo } from "../utils";
import TitleContainer from "./TitleContainer";
const WhyUs = () => {
  return (
    <div className="flex flex-col w-full p-3">
      <div className="flex  my-10 w-full md:w-[90%] mx-auto bg-gray-50">
        <div className="flex p-3 md:p-12 flex-col gap-y-5">
          <TitleContainer text={"Why Us?"} />
          <p className="flex text-left md:text-start font-extralight text-xl leading-8">
            We're not just a service; we're a testament to resilience. We've
            walked in your shoes, faced the same challenges, and emerged
            stronger. Every service at VetNet.Social is offered by a veteran who
            understands the intricacies of the domain, ensuring genuine
            expertise and guidance. Our mantra is simple – "Been there, done
            it". Choose us because we're not just any platform; we're your
            battle-tested comrades ready to assist you in your next mission.
          </p>
        </div>
      </div>
      {/* vision misson */}
      <div className="flex flex-col w-full sm:px-10 md:w-[90%] mx-auto  ">
        <div className="flex flex-col md:flex-row md:gap-x-5 gap-y-4">
          {companyInfo.map((data) => {
            return (
              <div
                key={data.id}
                className="border-2 border-gray-200 w-full  rounded-md p-5 lg:p-6 flex flex-col lg:flex-row gap-x-3"
              >
                <div className="flex flex-col lg:w-[50%]">
                  <h2 className="font-semibold">{data.heading}</h2>
                  <h1 className="font-bold text-2xl">{data.title}</h1>
                  <p className="text-justify">{data.text}</p>
                </div>
                <div className="hidden md:flex lg:w-[50%]">
                  <img
                    src={data.image}
                    alt="datas"
                    className="w-[300px] h-[200px] "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
