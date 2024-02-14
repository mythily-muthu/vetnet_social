import React from "react";

const ValuedPartners = () => {
  return (
    <div className="flex flex-col w-full p-3">
      <div className="flex flex-col sm:flex-row  my-10 w-full md:w-[90%] mx-auto">
        <div className="flex p-3 md:p-12 flex-col gap-y-5 sm:w-[50%]">
          <h1 className="flex justify-center font-semibold text-3xl tracking-wide">
            Valued Partners
          </h1>
          <p className="flex md:text-start font-light text-justify ">
            Our partnerships with these esteemed organizations symbolize a
            shared commitment to excellence and innovation. Together, we are
            forging new paths and achieving greater success.
          </p>
        </div>
        <div className="flex sm:w-[50%]"></div>
      </div>
    </div>
  );
};

export default ValuedPartners;
